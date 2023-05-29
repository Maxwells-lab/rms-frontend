import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens} from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import MailIcon from '@mui/icons-material/Mail';
import Badge from "@mui/material/Badge";
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {
   
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2} >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 2 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
        
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>

        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        
        <IconButton>
          <ListOutlinedIcon/>
        </IconButton>

        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>


      </Box>
    </Box>
  );
};

export default Topbar;
