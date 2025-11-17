// client/src/components/admin/AdminRow.jsx
import React from "react";
import { Eye, Edit2, Trash2 } from "lucide-react";


// IconButton kecil untuk aksi
function IconButton({ children, onClick, title = "", className = "" }) {
    return (
        <button
            title={title}
            onClick={onClick}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-md border hover:bg-slate-50 transition ${className}`}
        >
            {children}
        </button>
    );
}


export default function AdminRow({ admin, onEdit, onDelete, onDetail }) {
    return (
        <tr className="hover:bg-slate-50 transition">
            <td className="px-4 py-3">
                <img
                    src={admin.foto}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                />
            </td>


            <td className="px-4 py-3 font-medium">{admin.id_admin}</td>


            <td className="px-4 py-3">
                <div className="flex flex-col">
                    <span className="font-semibold">{admin.nama}</span>
                    <span
                        className={`text-xs px-2 py-0.5 w-fit rounded-md mt-1 text-white ${admin.role === "superadmin" ? "bg-emerald-600" : "bg-slate-600"
                            }`}
                    >
                        {admin.role === "superadmin" ? "Superadmin" : "Admin"}
                    </span>
                </div>
            </td>


            <td className="px-4 py-3">{admin.email}</td>
            <td className="px-4 py-3">{admin.no_hp}</td>


            <td
                className="px-4 py-3 max-w-xs truncate"
                title={admin.alamat}
            >
                {admin.alamat}
            </td>


            <td className="px-4 py-3">
                {new Date(admin.tanggal_dibuat).toLocaleDateString()}
            </td>


            <td className="px-4 py-3">
                {new Date(admin.terakhir_login).toLocaleString()}
            </td>


            <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                    <IconButton title="Detail" onClick={() => onDetail(admin)}>
                        <Eye size={14} />
                    </IconButton>


                    <IconButton title="Edit" onClick={() => onEdit(admin)}>
                        <Edit2 size={14} />
                    </IconButton>


                    <IconButton
                        title="Hapus"
                        onClick={() => onDelete(admin)}
                        className="border-red-300 hover:bg-red-50 text-red-600"
                    >
                        <Trash2 size={14} />
                    </IconButton>
                </div>
            </td>
        </tr>
    );
}