// client/src/pages/superadmin/DataPengawasPage.jsx
import React from "react";
import PengawasTable from "../../components/pengawas/PengawasTable";

export default function DataPengawasPage() {
    // Dummy data — nanti bisa diganti fetch API
    const dummyPengawas = [
        {
            id_pengawas: "PGW-0001",
            kode_pengawas: "PGW-001",
            nama_lengkap: "Ahmad Fauzi",
            nik: "1234567890123456",
            no_telp: "081234567890",
            alamat: "Jl. Merdeka No. 12, Jakarta",
            foto: "https://placehold.co/200",
            tanggal_bergabung: "2023-08-10T10:00:00Z",
            status_aktif: true,
            sertifikasi: [
                { nama_sertifikasi: "Audit Konstruksi", lembaga_penerbit: "LSP Konstruksi", tanggal_terbit: "2022-05-01", tanggal_kadaluarsa: "2025-05-01" }
            ],
            proyek: [
                { nama_proyek: "Perumahan Indah", alamat_proyek: "Jakarta Barat", status_proyek: "Sedang Berjalan" },
                { nama_proyek: "Apartemen Maju", alamat_proyek: "Jakarta Selatan", status_proyek: "Selesai" }
            ]
        },
        {
            id_pengawas: "PGW-0002",
            kode_pengawas: "PGW-002",
            nama_lengkap: "Siti Aminah",
            nik: "9876543210987654",
            no_telp: "081298765432",
            alamat: "Perumahan Lestari Blok B-21",
            foto: "https://placehold.co/200",
            tanggal_bergabung: "2023-02-15T08:00:00Z",
            status_aktif: false,
            sertifikasi: [],
            proyek: []
        }
    ];

    return (
        <div className="p-6">
            {/* PAGE HEADER */}
            <div className="mb-6 flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Data Pengawas</h1>
                <p className="text-slate-600">Kelola semua akun pengawas, sertifikasi, dan proyek yang diawasi.</p>
            </div>

            {/* TABLE COMPONENT */}
            <PengawasTable data={dummyPengawas} />
        </div>
    );
}
