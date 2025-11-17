// server/data/simulateNotifications.js

import notificationService from "../../client/src/components/ui/LogNotifikasi";

export const simulateIncomingNotif = () => {
    setInterval(() => {
        const notif = {
            category: "proyek",
            title: "Update progres terbaru dari Mandor",
            time: "Baru saja",
            read: false,
        };

        notificationService.pushNotification(notif);
    }, 8000); // setiap 8 detik
};
