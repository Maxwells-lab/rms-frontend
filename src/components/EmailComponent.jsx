import React, { useState } from 'react';
import { Box, Typography, Badge, IconButton, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@mui/material';
import { EmailOutlined, DeleteOutlined } from '@mui/icons-material';

const EmailComponent = () => {
  const [open, setOpen] = useState(false);
  const [emails, setEmails] = useState([
    { id: 1, subject: 'Email 1', content: 'This is the content of email 1' },
    { id: 2, subject: 'Email 2', content: 'This is the content of email 2' },
    { id: 3, subject: 'Email 3', content: 'This is the content of email 3' },
  ]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (emailId) => {
    setEmails((prevEmails) => prevEmails.filter((email) => email.id !== emailId));
  };

  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <Badge badgeContent={emails.length === 0 ? '0' : emails.length} color="error">
          <EmailOutlined />
        </Badge>
      </IconButton>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle color ="secondary" fontSize={20} textAlign={"center"}>Emails</DialogTitle>
        <DialogContent>
          {emails.length === 0 ? (
            <Typography variant="body1">No emails to display</Typography>
          ) : (
            <List>
              {emails.map((email) => (
                <ListItem key={email.id}>
                  <ListItemText primary={email.subject} secondary={email.content} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={() => handleDelete(email.id)}>
                      <DeleteOutlined />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          )}
          <Button onClick={handleClose} color="primary" variant="contained" fullWidth>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default EmailComponent;
