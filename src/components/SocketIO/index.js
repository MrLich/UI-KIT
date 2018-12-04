import Component from '../Component';
import SocketClient from 'socket.io-client';

export default class SocketIO extends Component {

    static socketClient = null;

    constructor(props) {
        super(props);
    }

    connectSocketIO(params) {
        if (!SocketIO.socketClient) {
            SocketIO.socketClient = SocketClient(`${params.url}?token=${params.token}`);
            SocketIO.socketClient.on('disconnect', () => {
                console.log('disconnected')
            });
            SocketIO.socketClient.on('reconnect', () => {
                console.log('reconnect')
            });
            SocketIO.socketClient.on('reconnect_error', () => {
                console.log('reconnect_error')
            });
            SocketIO.socketClient.on('connect', () => {
                SocketIO.socketClient.emit('ping.message', 'PING');
            })
        }
        params.notifications.map((notification) => {
            SocketIO.socketClient && SocketIO.socketClient.on(notification, (object) => {
                this.componentDidReceiveNotifications(notification, object);
            });
        })
    }

    componentDidReceiveNotifications(notification, object) { 
        console.log('componentDidReceiveNotifications:', notification, object);
    }
}