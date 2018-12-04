import SocketIO from '../SocketIO';
import PropTypes from 'prop-types';

export default class OpenAPI extends SocketIO {

    constructor(props) {
        super(props);
    }

    componentWillReceiveData(response) {
        return response.json();
    }

    convertObjectToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    get(path, query, headers) {
        return fetch(this.props.apicfg.url + path + '?' + convertObjectToQueryString(query),
            {
                ...this.props.apicfg.options,
                ...{
                    method: 'POST',
                    headers: {
                        ...this.props.apicfg.options.headers, ...headers
                    },
                    query: JSON.stringify(payload)
                }
            }
        ).then((response) => componentWillReceiveData(response))
    }

    post(path, payload, headers) {
        return fetch(this.props.apicfg.url + path,
            {
                ...this.props.apicfg.options,
                ...{
                    method: 'POST',
                    headers: {
                        ...this.props.apicfg.options.headers, ...headers
                    },
                    body: JSON.stringify(payload)
                }
            }
        ).then((response) => componentWillReceiveData(response))
    }

    put(path, payload, headers) {
        return fetch(this.props.apicfg.url + path,
            {
                ...this.props.apicfg.options,
                ...{
                    method: 'POST',
                    headers: {
                        ...this.props.apicfg.options.headers, ...headers
                    },
                    body: JSON.stringify(payload)
                }
            }
        ).then((response) => componentWillReceiveData(response))
    }

    delete(path, headers) {
        return fetch(this.props.apicfg.url + path,
            {
                ...this.props.apicfg.options,
                ...{
                    method: 'DELETE',
                    headers: {
                        ...this.props.apicfg.options.headers, ...headers
                    }
                }
            }
        ).then((response) => componentWillReceiveData(response))
    }

    patch(path, payload, headers) {
        return fetch(this.props.apicfg.url + path,
            {
                ...this.props.apicfg.options,
                ...{
                    method: 'PATCH',
                    headers: {
                        ...this.props.apicfg.options.headers, ...headers
                    },
                    body: JSON.stringify(payload)
                }
            }
        ).then((response) => componentWillReceiveData(response))
    }

    head(path, headers) {
        return fetch(this.props.apicfg.url + path,
            {
                ...this.props.apicfg.options,
                ...{
                    method: 'HEAD',
                    headers: {
                        ...this.props.apicfg.options.headers, ...headers
                    }
                }
            }
        ).then((response) => componentWillReceiveData(response))
    }
}

OpenAPI.propTypes = {
    apicfg: PropTypes.object
};

OpenAPI.defaultProps = {
    apicfg: {
        url: undefined,
        options: {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
    }
};