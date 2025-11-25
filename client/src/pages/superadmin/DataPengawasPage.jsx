// client/src/pages/superadmin/DataPengawasPage.jsx

import { useEffect, useState } from "react";
import PengawasTable from "../../components/pengawas/PengawasTable";
import supabase from "../../supabase-client";

export default function DataPengawasPage() {
  const [dataPengawas, setDataPengawas] = useState([]);

  const fetchDataPengawas = async () => {
    try {
      const { error, data } = await supabase
        .from("tb_detail_pengawas")
        .select("*");
      if (error) throw new Error(error.message);

      setDataPengawas(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataPengawas();
  }, []);

  return (
    <div className="p-6">
      {/* PAGE HEADER */}
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Data Pengawas</h1>
        <p className="text-slate-600">
          Kelola semua akun pengawas, sertifikasi, dan proyek yang diawasi.
        </p>
      </div>

      {/* TABLE COMPONENT */}
      <PengawasTable data={dataPengawas} />
    </div>
  );
}
