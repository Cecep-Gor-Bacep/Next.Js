"use client";

import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns: GridColDef<typeof rows>[] = [
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
  },
  {
    field: "keterangan",
    headerName: "Keterangan",
    width: 200,
    editable: true,
  },
];

const rows = [
  { nim: "F1B02310101", nama: "Snow", status: "Jon", keterangan: "" },
  { nim: "F1B02310102", nama: "Lannister", status: "Cersei", keterangan: "" },
  { nim: "F1B02310103", nama: "Lannister", status: "Jaime", keterangan: "" },
  { nim: "F1B02310104", nama: "Stark", status: "Arya", keterangan: "" },
  { nim: "F1B02310105", nama: "Targaryen", status: "Daenerys", keterangan: "" },
  { nim: "F1B02310106", nama: "Melisandre", status: "", keterangan: "" },
  { nim: "F1B02310107", nama: "Clifford", status: "Ferrara", keterangan: "" },
  { nim: "F1B02310108", nama: "Frances", status: "Rossini", keterangan: "" },
  { nim: "F1B02310109", nama: "Roxie", status: "Harvey", keterangan: "" },
];

export default function DataGridDemo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if(!mounted){
    return <Box sx={{height: "90vh", width: "100%"}}/>
  }
  const handleChange = async (newRow: GridRowModel, oldRow: GridRowModel) => {
    try{
      const response = await fetch("/api/aktif", {
        method: "POST",
        body: JSON.stringify(newRow)
      })

      if (!response.ok){
        throw new Error(response.statusText)
      }

      const result = await response.json();
      console.log(result)
      
      return newRow

    } catch (error) {
      alert("Terjadi kesalahan saat proses fetching data")
      return oldRow
    }
  };

  return (
    <Box sx={{ height: "90vh", width: "100%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row)=>row.nim}
        processRowUpdate={handleChange}
        onProcessRowUpdateError={(error)=>console.log("Edit error: ", error)}
        slotProps={{
          toolbar: {showQuickFilter: true}
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: rows.length,
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
