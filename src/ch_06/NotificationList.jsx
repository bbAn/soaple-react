import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "메시지 1",
    },
    {
        id: 2,
        message: "메시지 2",
    },
    {
        id: 3,
        message: "메시지 3",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({ //state 업데이트
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification 
                            key={notification.id}
                            id={notification.id}
                            message={notification.message} 
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;

