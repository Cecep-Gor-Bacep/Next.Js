"use client";

import { styled, alpha, useTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import { Drawer } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import { Divider } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupOffIcon from "@mui/icons-material/GroupOff";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Block, Settings } from "@mui/icons-material";
import { theme as defaultTheme } from "./Theme";
import ToggleColorMode from "./ThemeSwitch";

const drawerWidth = 240;

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBars = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",

  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menuItem1 = [
    { text: "Dashboard", icon: <DashboardIcon />, href: "/" },
    { text: "Aktif", icon: <GroupsIcon />, href: "/pages/aktif" },
    { text: "Tidak Aktif", icon: <GroupOffIcon />, href: "/pages/tidakAktif" },
  ];
  const menuItem2 = [
    { text: "Cuti", icon: <PersonOutlineIcon />, href: "/pages/cuti" },
    { text: "Lulus", icon: <EngineeringIcon />, href: "/pages/lulus" },
    { text: "DO", icon: <Block />, href: "/pages/deo" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        <CssBaseline />
        <AppBars
          position="static"
          color="primary"
          open={open}
          // sx={{ backgroundColor: "#1976d2 !important", color: "#fff" }}
          enableColorOnDark
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={[{ mr: 2 }, open && { display: "none" }]}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              SIM
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <ToggleColorMode />
          </Toolbar>
        </AppBars>
        <ThemeProvider theme={defaultTheme}>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            // variant='persistent'
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
          >
            <DrawerHeader>
              <IconButton onClick={toggleDrawer(false)} sx={{ color: "#fff" }}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            {/* {DrawerList} */}
            <CssBaseline />
            <List>
              {menuItem1.map((item1) => (
                <ListItem key={item1.text} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={item1.href}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemIcon>{item1.icon}</ListItemIcon>
                    <ListItemText primary={item1.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {menuItem2.map((item2) => (
                <ListItem key={item2.text} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={item2.href}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemIcon>{item2.icon}</ListItemIcon>
                    <ListItemText primary={item2.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ mt: "auto" }} />
            <List>
              <ListItemButton
                component={Link}
                href="./Setting"
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Setting" />
              </ListItemButton>
            </List>
          </Drawer>
        </ThemeProvider>
      </div>
    </Box>
  );
}
