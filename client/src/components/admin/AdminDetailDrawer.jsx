// client/src/components/admin/AdminDetailDrawer.jsx
import React from "react";
import { X, Mail, Phone, MapPin, User, Calendar, LogIn } from "lucide-react";

export default function AdminDetailDrawer({ isOpen, onClose, admin }) {
    if (!isOpen || !admin) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
            <div className="w-full max-w-md bg-white h-full shadow-xl p-6 overflow-y-auto animate-in slide-in-from-right">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Detail Admin</h2>
                    <button onClick={onClose}>
                        <X size={22} />
                    </button>
                </div>

                {/* PROFILE SECTION */}
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={admin.foto}
                        alt="Foto Admin"
                        className="w-28 h-28 rounded-full object-cover shadow-md"
                    />
                    <h3 className="mt-4 text-lg font-semibold">{admin.nama}</h3>
                    <span
                        className={`mt-1 text-sm px-3 py-1 rounded-full text-white ${admin.role === "superadmin" ? "bg-emerald-600" : "bg-slate-600"
                            }`}
                    >
                        {admin.role === "superadmin" ? "Superadmin" : "Admin"}
                    </span>
                </div>

                {/* DETAILS LIST */}
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
                    <button
                        onClick={onClose}
                        className="px-5 py-2 border rounded-lg hover:bg-slate-50"
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
}

// COMPONENT DETAIL ITEM
function DetailItem({ icon, label, value }) {
    return (
        <div className="flex items-start gap-3 p-3 border rounded-lg bg-slate-50">
            <div className="text-slate-600">{icon}</div>
            <div>
                <p className="text-xs uppercase text-slate-500 font-semibold">{label}</p>
                <p className="text-sm text-slate-700 mt-0.5">{value}</p>
            </div>
        </div>
    );
}