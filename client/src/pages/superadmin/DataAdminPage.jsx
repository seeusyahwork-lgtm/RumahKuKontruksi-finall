// client/src/pages/superadmin/DataAdminPage.jsx
import React from "react";
import AdminTable from "../../components/admin/AdminTable";

export default function DataAdminPage() {
    // Dummy data — nanti bisa diganti fetch API
    const dummyAdmins = [
        {
            id_admin: "ADM-001",
            nama: "Budi Santoso",
            email: "budi@example.com",
            no_hp: "081234567890",
            alamat: "Jl. Kenangan No. 12, Jakarta",
            role: "admin",
            foto: "https://placehold.co/200",
            tanggal_dibuat: "2024-03-10T10:00:00Z",
            terakhir_login: "2024-03-16T14:20:00Z",
        },
        {
            id_admin: "ADM-002",
            nama: "Siti Aminah",
            email: "siti@example.com",
            no_hp: "081298765432",
            alamat: "Perumahan Indah Lestari Blok B-21",
            role: "superadmin",
            foto: "https://placehold.co/200",
            tanggal_dibuat: "2024-02-05T08:00:00Z",
            terakhir_login: "2024-03-16T08:50:00Z",
        },
    ];

    return (
        <div className="p-6">
            {/* PAGE HEADER */}
            <div className="mb-6 flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Data Admin</h1>
                <p className="text-slate-600">Kelola semua akun admin & superadmin.</p>
            </div>

            {/* TABLE COMPONENT */}
            <AdminTable data={dummyAdmins} />
        </div>
    );
}