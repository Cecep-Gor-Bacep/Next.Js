"use client";

import { Height } from "@mui/icons-material";
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
    valueGetter: (_, row) => row.statusMhs?.[0]?.status || "-",
    valueSetter: (value, row) => {
    return { ...row, statusMhs: { ...row.statusMhs, status: value } };
  },
  },
  {
    field: "keteterangan",
    headerName: "Keterangan",
    width: 200,
    editable: true,
    valueGetter: (_, row) => row.statusMhs?.[0]?.ket || "-",
    valueSetter: (value, row) => {
      return { ...row, statusMhs: { ...row.statusMhs, ket: value } };
    },
  },
];

export default function DataGridDemo() {
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
  const handleChange = async (newRow: GridRowModel, oldRow: GridRowModel) => {
    try {
      const response = await fetch("/api/aktif", {
        method: "POST",
        body: JSON.stringify(newRow),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const result = await response.json();
      console.log(result);

      return newRow;
    } catch (error) {
      alert("Terjadi kesalahan saat proses fetching data");
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
