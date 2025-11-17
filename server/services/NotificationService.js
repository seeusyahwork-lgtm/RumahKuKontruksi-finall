// server/services/NotificationService.js

class NotificationService {
    constructor() {
        this.listeners = [];
    }

    subscribe(callback) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(fn => fn !== callback);
        };
    }

    pushNotification(notif) {
        this.listeners.forEach(fn => fn(notif));
    }
}

const notificationService = new NotificationService();
export default notificationService;
