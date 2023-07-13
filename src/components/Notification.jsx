import React, { useState } from 'react';
import {
  IconButton,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import { Notifications as NotificationsIcon, DeleteOutlined } from '@mui/icons-material';

const Notification = () => {
  const [notificationMessages, setNotificationMessages] = useState([
    { id: 1, text: 'Notification 1' },
    { id: 2, text: 'Notification 2' },
    { id: 3, text: 'Notification 3' },
    { id: 4, text: 'Notification 4' },
  ]); // Initial notification messages
  const [showDialog, setShowDialog] = useState(false); // State for showing/hiding the dialog

  const handleNotificationClick = () => {
    if (notificationMessages.length > 0) {
      setShowDialog(true);
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const handleDeleteMessage = (id) => {
    setNotificationMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== id)
    );
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleNotificationClick}>
        <Badge badgeContent={notificationMessages.length === 0 ? '0' : notificationMessages.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Dialog open={showDialog} onClose={handleDialogClose} style={{ marginLeft: '69%', marginTop: '-10%' }} maxWidth="md" fullWidth>
        <DialogTitle color="secondary" fontSize={17} textAlign="center">
          Notifications
        </DialogTitle>
        <DialogContent>
          {notificationMessages.length === 0 ? (
            <Typography variant="body1">No notifications</Typography>
          ) : (
            <List>
              {notificationMessages.map((message) => (
                <ListItem key={message.id}>
                  <ListItemText primary={message.text} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={() => handleDeleteMessage(message.id)}>
                      <DeleteOutlined />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Notification;
