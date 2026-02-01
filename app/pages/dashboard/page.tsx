import { Box, Typography, Paper, alpha, Icon } from "@mui/material";
import Grid from "@mui/material/Grid";
import SchoolIcon from '@mui/icons-material/School';

const stats = [
    {
      title: "Total Jumlah Siswa",
      value: "2.544",
      description: "Semua program studi",
      color: "#1976d2",
      icon: <SchoolIcon />,
    },
    {
      title: "Aktif",
      value: "852",
      description: "33.5% dari total",
      color: "#2e7d32",
    },
    {
      title: "Tidak Aktif",
      value: "210",
      description: "8.3% dari total",
      color: "#d32f2f",
    },
    {
      title: "Cuti",
      value: "5",
      description: "Saat ini sedang cuti",
      color: "#ed6c02",
    },
  ];
export default function SimpleStatsDashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {stats.map((stat, index) => (
          <Grid 
            size={{ xs: 12, sm: 6, md: 3 }}
            key={index}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 2,
                border: `1px solid ${alpha(stat.color, 0.2)}`,
                bgcolor: alpha(stat.color, 0.05),
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.2s",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 4px 12px ${alpha(stat.color, 0.1)}`,
                },
              }}
            >
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  mb: 1,
                }}
              >
                {stat.title}
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: stat.color,
                  fontWeight: "bold",
                  fontSize: { xs: "2.5rem", sm: "3rem" },
                  lineHeight: 1.2,
                  mb: 1,
                }}
              >
                {stat.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
