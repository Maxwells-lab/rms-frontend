import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, FormControlLabel, IconButton, List, ListItem, ListItemIcon, ListItemText, Box, Typography, useTheme } from '@mui/material';
import { Brightness4 as Brightness4Icon, Edit as EditIcon, QuestionAnswer as QuestionAnswerIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import Notification from './Notification';
import { GlobalContext, tokens } from "../theme";


const SettingsPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = React.useContext(GlobalContext);

  const handleThemeToggle = () => {

  };

  return (
    <Typography variant='h3' align='center' sx={{marginTop:"1px"}} >Settings
        <Box sx={{ marginLeft: "150px", marginRight:"50px", marginTop: "60px", boxShadow: 10,  p: 2, borderRadius: "20px", width: "75%", height:"350px"}}>
      <List>
        {/* Theme Toggle */}
        <ListItem>
          <ListItemIcon>
            <Brightness4Icon />
          </ListItemIcon>
          <ListItemText primary="Theme" />
          <FormControlLabel
            control={<Switch checked={false} onChange={colorMode.toggleColorMode} />}
            label="Dark Mode"
            sx={{ marginRight: "150px" }}
          />
        </ListItem>

        {/* Edit Profile */}
        <Link to="/profilepage" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem button>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </ListItem>
        </Link>

        <ListItem button sx={{ marginLeft: "-12px", textDecoration: 'none', color: 'inherit' }}>
          <ListItemIcon>
            <Notification />
          </ListItemIcon>
          <ListItemText primary="Notification" sx={{ marginLeft: "10px" }} />
        </ListItem>

        {/* FAQ */}
        <Link to="/faq" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem button>
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItem>
        </Link>
      </List>
      </Box>
      </Typography>
  );
};

export default SettingsPage;
