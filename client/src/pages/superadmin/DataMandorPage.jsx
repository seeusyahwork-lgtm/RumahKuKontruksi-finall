// client/src/pages/superadmin/DataMandorPage.jsx
import { useEffect, useState } from "react";
import MandorTable from "../../components/mandor/MandorTable";
import supabase from "../../supabase-client";

export default function DataMandorPage() {
  const [dataMandor, setDataMandor] = useState([]);

  const fetchDataMandor = async () => {
    try {
      const { error, data } = await supabase
        .from("tb_detail_mandor")
        .select("*");
      if (error) throw new Error(error.message);

      setDataMandor(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataMandor();
  }, []);

  return (
    <div className="p-6">
      {/* PAGE HEADER */}
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Data Mandor</h1>
        <p className="text-slate-600">
          Kelola semua mandor proyek. Tambah, edit, lihat detail, atau hapus
          data mandor.
        </p>
      </div>

      {/* TABLE COMPONENT */}
      <MandorTable data={dataMandor} />
    </div>
  );
}
