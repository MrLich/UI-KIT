//import { google, facebook } from 'react-native-simple-auth';

export default class AuthManager {
    constructor(options) {
        this.options = options;
        this.provider = null;
    }

    login = (provider, params) => {
        this.provider = provider;
        switch (provider) {
            // case 'facebook':
            //     return facebook({
            //         appId: this.options[provider].clientId,
            //         callback: this.options[provider].redirectUrl,
            //         scope: 'name,email'
            //     })
            // case 'google':
            //     return google({
            //         appId: this.options[provider].clientId,
            //         callback: this.options[provider].redirectUrl,
            //         scope: 'profile'
            //     })
            default:
                break;
        }
    }

    logout = () => {
        this.provider = null;
    }

    getUserProfile = (token) => {
        switch (this.provider) {
            case 'facebook':
                return fetch(`https://www.facebook.com/v3.1/me?fields=id,name,email?access_token=${token}`).then((response) => response.json())
            case 'google':
                return fetch(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${token}`).then((response) => response.json())
            default:
                break;
        }
    }
}