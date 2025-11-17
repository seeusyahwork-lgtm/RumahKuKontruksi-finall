// client/src/components/pengawas/PengawasFilters.jsx

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

const PengawasFilters = ({ filters, setFilters }) => {
    return (
        <div className="w-full p-4 bg-white rounded-2xl shadow mb-4 flex flex-col md:flex-row gap-3 items-center">
            <div className="flex items-center gap-2 w-full md:w-1/3">
                <Input
                    placeholder="Cari nama / NIK / kode pengawas..."
                    value={filters.search}
                    onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                />
            </div>

            <div className="flex items-center gap-2">
                <Button variant="outline" className="flex gap-2">
                    <Filter size={18} />
                    Filter
                </Button>

                <Button
                    variant="ghost"
                    onClick={() => setFilters({ search: "" })}
                    className="flex gap-2"
                >
                    <X size={16} /> Reset
                </Button>
            </div>
        </div>
    );
};

export default PengawasFilters;
