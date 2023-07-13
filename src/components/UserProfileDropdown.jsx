import {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { tokens } from "../theme";
import { Box, useMediaQuery, useTheme, MenuItem, MenuList, ClickAwayListener, Paper, Grow, Popper } from '@mui/material';
import avatar from './Assets/images.jpeg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const UserProfileDropdown = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          ref={anchorRef}
          alt="User Profile"
          src={avatar}
          onClick={handleToggle}
          sx={{ width: isSmallScreen ? 40 : 50, height: isSmallScreen ? 40 : 50, cursor: 'pointer' }}
        />
        <ArrowDropDownIcon onClick={handleToggle} sx={{ cursor: 'pointer' }} />
      </Box>
      <Popper sx={{ minWidth: 200, zIndex: 999 }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem component={Link} to="/ProfilePage" onClick={handleClose}>Profile</MenuItem>
                  <MenuItem component={Link} to="/Settings" onClick={handleClose}>Settings</MenuItem>
                  <MenuItem component={Link} to="/LogOut" onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Box sx={{ position: 'absolute', top: '100%', left: 0, right: 0}}>
        
      </Box>
    </Box>
  );
};

export default UserProfileDropdown;
