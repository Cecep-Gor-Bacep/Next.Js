"use client";

import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "nim", headerName: "NIM", width: 150 },
  {
    field: "nama",
    headerName: "Nama",
    width: 200,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 110,
    editable: true,
    valueGetter: (...args: any[]) => {
      const row = args[1] ?? args[0];
      return row?.statusMhs?.[0]?.status ?? "-";
    },
    valueSetter: (...args: any[]) => {
      const value: any = args[0], row = args[1];
      return { ...row, statusMhs: [{ ...(row?.statusMhs?.[0] ?? {}), status: value }] };
    },
  },
  {
    field: "ket",
    headerName: "Keterangan",
    width: 200,
    editable: true,
    valueGetter: (...args: any[]) => {
      const row = args[1];
      return row?.statusMhs?.[0]?.ket ?? "-";
    },
    valueSetter: (...args: any[]) => {
      const value: any = args[0], row = args[1];
      return { ...row, statusMhs: [{ ...(row?.statusMhs?.[0] ?? {}), ket: value }] };
    },
  },
];

export default function Aktif() {
  const [rows, setRows] = useState<GridRowModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetch("/api/aktif");
        const data = await result.json();
        setRows(data);
        setLoading(false);
        console.log(data);
      } catch (e) {
        alert("Terjadi kesalahan saat proses fetching data" + e);
      }
    };

    fetchData();
  }, []);

  if (!mounted) {
    return <Box sx={{ height: "90vh", width: "100%" }} />;
  }
  
  // Handle change nya api -> services -> route. 
  const handleChange = async (newRow: GridRowModel, oldRow: GridRowModel) => {
    try {
      const { nim } = newRow;
      const { status, ket } = Array.isArray(newRow.statusMhs) ? newRow.statusMhs[0] : {};

      const res = await fetch(`/api/aktif?nim=${encodeURIComponent(String(nim))}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nim:nim, status:status, ket:ket }),
      });

      const json = await res.json();
      if (json?.statusMhs) {
        setRows(prev => prev.map(r => (String(r.nim) === String(nim) ? { ...r, statusMhs: json.statusMhs } : r)));
        return { ...newRow, statusMhs: json.statusMhs } as GridRowModel;
      }

      return newRow;
    } catch (e) {
      alert(e);
      return oldRow;
    }
  };

  return (
    <Box sx={{ height: "90vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.nim}
        processRowUpdate={handleChange}
        onProcessRowUpdateError={(error) => console.log("Edit error: ", error)}
        slotProps={{
          toolbar: { showQuickFilter: true },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
