export function guid() {
    var d = new Date().getTime()
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
}

export default class FacebookProvider {
    constructor(options) {
        this.clientId = options.clientId;
        this.redirectUrl  = options.redirectUrl;
        this.accessToken = null;
    }

    buildAuthorizeUrl() {
        return `https://www.facebook.com/v3.1/dialog/oauth?
        client_id=${this.clientId}
        &response_type=token
        &redirect_uri=${this.redirectUrl}
        &state=${guid()}`
    }

    extractError(redirectUrl) {
        const errorMatch = redirectUrl.match(/error=([^&]+)/)
        if (!errorMatch) {
            return undefined
        }

        const errorReason = errorMatch[1]
        const errorDescriptionMatch = redirectUrl.match(/error_description=([^&]+)/)
        const errorDescription = errorDescriptionMatch ? errorDescriptionMatch[1] : ''
        return new Error(`Error during login. Reason: ${errorReason} Description: ${errorDescription}`)
    }

    extractSession(redirectUrl) {
        const accessTokenMatch = redirectUrl.match(/access_token=([^&]+)/)
        if (accessTokenMatch) {
            this.accessToken = accessTokenMatch[1]
        }

        let idToken = null
        let decodedIdToken = null
        const idTokenMatch = redirectUrl.match(/id_token=([^&]+)/)
        if (idTokenMatch) {
            idToken = idTokenMatch[1]
            decodedIdToken = JSON.parse(atob(idToken.split('.')[1]))
        }

        let expireDurationSeconds = 3600
        const expireDurationSecondsMatch = redirectUrl.match(/expires_in=([^&]+)/)
        if (expireDurationSecondsMatch) {
            expireDurationSeconds = parseInt(expireDurationSecondsMatch[1])
        }
        return {
            accessToken: this.accessToken,
            expireDurationSeconds,
            idToken,
            decodedIdToken
        }
    }

    validateSession(session) {
        const now = (new Date()).getTime() / 1000
        
        // With normal JWT tokens you can inspect the `exp` Expiration claim; however,
        // AAD V2 tokens are opaque and we must use the token meta about expiration time
        // "When you request an access token from the v2.0 endpoint, the v2.0 endpoint also returns metadata about the access token for your app to use."
        // See: https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-tokens
        // Here we are leveraging the fact that the access token was issued at the same
        // time as the ID token and can use its `iat` Issued At claim + the duration
        // to compute an absolute expiration time
        const expiration = session.decodedIdToken.iat + session.expireDurationSeconds

        // 15 minutes minimum duration until token expires
        const minimumDuration = 60 * 15
        return (expiration - now) > minimumDuration
    }

    getAccessToken(session, resourceId) {
        return session.accessToken
    }

    getSignOutUrl(redirectUrl) {
        return `https://www.facebook.com/logout.php?next=${encodeURIComponent(redirectUrl)}&access_token=${this.accessToken}`
    }
}