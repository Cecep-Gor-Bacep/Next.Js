"use client";

import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
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
  { nim: "F1B02310101", nama: "Snow", status: "Jon", keterangan: 14 },
  { nim: 2, nama: "Lannister", status: "Cersei", keterangan: 31 },
  { nim: 3, nama: "Lannister", status: "Jaime", keterangan: 31 },
  { nim: 4, nama: "Stark", status: "Arya", keterangan: 11 },
  { nim: 5, nama: "Targaryen", status: "Daenerys", keterangan: null },
  { nim: 6, nama: "Melisandre", status: null, keterangan: 150 },
  { nim: 7, nama: "Clifford", status: "Ferrara", keterangan: 44 },
  { nim: 8, nama: "Frances", status: "Rossini", keterangan: 36 },
  { nim: 9, nama: "Roxie", status: "Harvey", keterangan: 65 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: "90vh", width: "100%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row)=>row.nim}
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
