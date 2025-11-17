// client/src/components/pengawas/PengawasDetailDrawer.jsx
import React from "react";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import { CalendarDays, Phone, BadgeCheck, MapPin } from "lucide-react";

const PengawasDetailDrawer = ({ open, onClose, data }) => {
    if (!data) return null;

    return (
        <Drawer open={open} onOpenChange={onClose}>
            <DrawerContent className="p-6">
                <DrawerHeader>
                    <DrawerTitle>Detail Pengawas</DrawerTitle>
                </DrawerHeader>

                <div className="grid gap-4 mt-4">
                    <div className="flex items-center gap-3">
                        <img
                            src={data.foto || "https://placehold.co/80x80"}
                            alt="Foto"
                            className="w-20 h-20 rounded-xl object-cover"
                        />
                        <div>
                            <h2 className="text-lg font-semibold">{data.nama_lengkap}</h2>
                            <p className="text-sm text-gray-500">{data.kode_pengawas}</p>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center text-sm text-gray-700">
                        <BadgeCheck size={18} />
                        NIK: {data.nik || "-"}
                    </div>

                    <div className="flex gap-2 items-center text-sm text-gray-700">
                        <Phone size={18} />
                        {data.no_telp || "-"}
                    </div>

                    <div className="flex gap-2 items-center text-sm text-gray-700">
                        <MapPin size={18} />
                        {data.alamat || "-"}
                    </div>

                    <div className="flex gap-2 items-center text-sm text-gray-700">
                        <CalendarDays size={18} />
                        Bergabung: {data.tanggal_bergabung}
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default PengawasDetailDrawer;
