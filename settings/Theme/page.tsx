import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ContrastIcon from "@mui/icons-material/Contrast";
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline";
import ToggleColorMode from "@/components/shared/ThemeSwitch";

export default function ThemeSettings() {
  return (
    <Box>
      <div>
      <CssBaseline />
      <List component="nav" sx={{ mt: 2, bgcolor: 'background.paper'}}>
        <ListItem>
          Dark Mode
          <ToggleColorMode />
        </ListItem>
      </List>
      </div>
    </Box>
  );
}
