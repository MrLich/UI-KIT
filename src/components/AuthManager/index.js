import RSA from 'react-simple-auth';
import FacebookProvider from './providers/facebook';
import GoogleProvider from './providers/google';

export default class AuthManager {
    constructor(options) {
        this.options = options;
        this.provider = null;
    }

    login = (provider) => {
        this.provider = provider;
        switch (provider) {
            case 'facebook':
                return RSA.acquireTokenAsync(new FacebookProvider(this.options[provider]))
            case 'google':
                return RSA.acquireTokenAsync(new GoogleProvider(this.options[provider]))
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