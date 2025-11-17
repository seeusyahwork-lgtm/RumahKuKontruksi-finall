// client/src/components/pengawas/PengawasFormModal.jsx

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PengawasFormModal = ({ open, onClose, formData, setFormData, onSubmit }) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>
                        {formData?.id_pengawas ? "Edit Pengawas" : "Tambah Pengawas"}
                    </DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 mt-4">
                    <Input
                        placeholder="Nama lengkap"
                        value={formData.nama_lengkap || ""}
                        onChange={(e) => setFormData({ ...formData, nama_lengkap: e.target.value })}
                    />

                    <Input
                        placeholder="NIK"
                        value={formData.nik || ""}
                        onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                    />

                    <Input
                        placeholder="No Telepon"
                        value={formData.no_telp || ""}
                        onChange={(e) => setFormData({ ...formData, no_telp: e.target.value })}
                    />

                    <Input
                        placeholder="Alamat"
                        value={formData.alamat || ""}
                        onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                    />

                    <Button className="w-full mt-2" onClick={onSubmit}>
                        Simpan
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PengawasFormModal;
