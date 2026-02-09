import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ContrastIcon from "@mui/icons-material/Contrast";
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline";

export default function Settings() {
  return (
    <Box>
      <div>
      <CssBaseline />
      <List component="nav" sx={{ mt: 2, bgcolor: 'background.paper'}}>
        <ListItem>
            <ContrastIcon />
          Dark Mode
        </ListItem>
      </List>
      </div>
    </Box>
  );
}
