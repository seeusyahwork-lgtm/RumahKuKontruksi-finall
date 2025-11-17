// client/src/components/pengawas/PengawasDetailDrawer.jsx
import React from "react";
import { X, User, Calendar, Phone, MapPin, CheckCircle } from "lucide-react";
import Drawer from "../common/Drawer";
import Button from "../common/Button";
import IconButton from "../common/IconButton";
import DetailItem from "../common/DetailItem";
import ProfileSection from "../common/ProfileSection";

export default function PengawasDetailDrawer({ isOpen, onClose, pengawas }) {
    if (!pengawas) return null;

    return (
        <Drawer isOpen={isOpen} onClose={onClose}>
            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Detail Pengawas</h2>
                <IconButton icon={<X size={22} />} onClick={onClose} />
            </div>

            {/* PROFILE */}
            <ProfileSection
                foto={pengawas.foto || "https://placehold.co/200"}
                nama={pengawas.nama_lengkap}
                role={pengawas.status_aktif ? "Aktif" : "Nonaktif"}
            />

            {/* DETAILS */}
            <div className="space-y-4 mt-4">
                <DetailItem icon={<User />} label="ID Pengawas" value={pengawas.kode_pengawas} />
                <DetailItem icon={<User />} label="NIK" value={pengawas.nik || "-"} />
                <DetailItem icon={<Phone />} label="Nomor HP" value={pengawas.no_telp || "-"} />
                <DetailItem icon={<MapPin />} label="Alamat" value={pengawas.alamat || "-"} />
                <DetailItem
                    icon={<Calendar />}
                    label="Tanggal Bergabung"
                    value={
                        pengawas.tanggal_bergabung
                            ? new Date(pengawas.tanggal_bergabung).toLocaleDateString()
                            : "-"
                    }
                />
            </div>

            {/* SERTIFIKASI */}
            {pengawas.sertifikasi && pengawas.sertifikasi.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Sertifikasi</h3>
                    <ul className="space-y-2">
                        {pengawas.sertifikasi.map((s, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle size={16} className="text-emerald-600" />
                                <span>{s.nama_sertifikasi} ({s.lembaga_penerbit})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* PROYEK YANG DIAWASI */}
            {pengawas.proyek && pengawas.proyek.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Proyek yang Diawasi</h3>
                    <ul className="space-y-2 text-sm">
                        {pengawas.proyek.map((p, idx) => (
                            <li key={idx}>
                                <span className="font-medium">{p.nama_proyek}</span> - {p.alamat_proyek} ({p.status_proyek})
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* CLOSE BUTTON */}
            <div className="mt-8 text-center">
                <Button onClick={onClose}>Tutup</Button>
            </div>
        </Drawer>
    );
}
