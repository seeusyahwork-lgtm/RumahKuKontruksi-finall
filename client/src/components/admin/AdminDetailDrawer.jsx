// client/src/components/admin/AdminDetailDrawer.jsx
import React from "react";
import { X, Mail, Phone, MapPin, User, Calendar, LogIn } from "lucide-react";

import Drawer from "../common/Drawer";
import Button from "../common/Button";
import IconButton from "../common/IconButton";
import DetailItem from "../common/DetailItem";
import ProfileSection from "../common/ProfileSection";

export default function AdminDetailDrawer({ isOpen, onClose, admin }) {
    if (!admin) return null;

    return (
        <Drawer isOpen={isOpen} onClose={onClose}>
            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Detail Admin</h2>
                <IconButton icon={<X size={22} />} onClick={onClose} />
            </div>

            {/* PROFILE */}
            <ProfileSection foto={admin.foto} nama={admin.nama} role={admin.role} />

            {/* DETAILS */}
            <div className="space-y-4">
                <DetailItem icon={<User />} label="ID Admin" value={admin.id_admin} />
                <DetailItem icon={<Mail />} label="Email" value={admin.email} />
                <DetailItem icon={<Phone />} label="Nomor HP" value={admin.no_hp} />
                <DetailItem icon={<MapPin />} label="Alamat" value={admin.alamat} />
                <DetailItem
                    icon={<Calendar />}
                    label="Tanggal Dibuat"
                    value={new Date(admin.tanggal_dibuat).toLocaleDateString()}
                />
                <DetailItem
                    icon={<LogIn />}
                    label="Terakhir Login"
                    value={new Date(admin.terakhir_login).toLocaleString()}
                />
            </div>

            {/* CLOSE BUTTON */}
            <div className="mt-8 text-center">
                <Button onClick={onClose}>Tutup</Button>
            </div>
        </Drawer>
    );
}
