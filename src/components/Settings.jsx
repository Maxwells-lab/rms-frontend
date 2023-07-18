import React from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';

const Settings = () => {
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle form submission here
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Revenue Settings
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Revenue Threshold"
              variant="outlined"
              // Add necessary props for the input field
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Revenue Currency"
              variant="outlined"
              // Add necessary props for the input field
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Revenue Tax"
              variant="outlined"
              // Add necessary props for the input field
            />
          </Grid>
          {/* Add more settings fields as needed */}
        </Grid>
              <Button sx={{ marginTop:"15px" }} type="submit" variant="contained" color="primary">
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default Settings;
