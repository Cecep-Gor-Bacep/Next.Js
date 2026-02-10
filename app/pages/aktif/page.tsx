"use client";

import { getAllMahasiswa } from "@/services/MahasiswaServices";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_DEFAULT_KEY!
);

const columns: GridColDef[] = [
  { field: "NIM", headerName: "Nim", width: 150 },
  {
    field: "NAMA",
    headerName: "Nama",
    width: 200,
    editable: true,
  },
  {
    field: "thn_masuk",
    headerName: "Tahun Masuk",
    width: 110,
    editable: true,
  }
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
        const { data, error } = await supabase.from('data_mhs').select();
        if (error) throw error;
        setRows((data) as GridRowModel[]);
        setLoading(false);
        console.log(data);
      } catch (error) {
        alert("Terjadi kesalahan saat proses fetching data " + JSON.stringify(error));
      }
    };

    fetchData();
  }, [])

  if(!mounted){
    return <Box sx={{height: "90vh", width: "100%"}}/>
  }

  return (
    <Box sx={{ height: "90vh"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row)=>row.NIM}
        // processRowUpdate={handleChange}
        onProcessRowUpdateError={(error)=>console.log("Edit error: ", error)}
        slotProps={{
          toolbar: {showQuickFilter: true}
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[rows.length]}
        checkboxSelection
        // disableRowSelectionOnClick
      />
    </Box>
  );
}
