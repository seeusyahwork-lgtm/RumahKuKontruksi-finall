// client/src/components/pengawas/PengawasTable.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash2 } from "lucide-react";

const PengawasTable = ({ data, onDetail, onEdit, onDelete }) => {
    return (
        <div className="bg-white rounded-2xl shadow p-4 overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b">
                        <th className="p-3 text-left">Kode</th>
                        <th className="p-3 text-left">Nama</th>
                        <th className="p-3 text-left">NIK</th>
                        <th className="p-3 text-left">Telepon</th>
                        <th className="p-3 text-left">Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.id_pengawas} className="border-b hover:bg-gray-50">
                            <td className="p-3">{item.kode_pengawas}</td>
                            <td className="p-3">{item.nama_lengkap}</td>
                            <td className="p-3">{item.nik || "-"}</td>
                            <td className="p-3">{item.no_telp || "-"}</td>
                            <td className="p-3 flex gap-2">
                                <Button size="icon" variant="outline" onClick={() => onDetail(item)}>
                                    <Eye size={18} />
                                </Button>

                                <Button size="icon" variant="outline" onClick={() => onEdit(item)}>
                                    <Pencil size={18} />
                                </Button>

                                <Button
                                    size="icon"
                                    variant="destructive"
                                    onClick={() => onDelete(item)}
                                >
                                    <Trash2 size={18} />
                                </Button>
                            </td>
                        </tr>
                    ))}

                    {data.length === 0 && (
                        <tr>
                            <td colSpan="5" className="text-center py-6 text-gray-500">
                                Tidak ada data pengawas
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PengawasTable;
