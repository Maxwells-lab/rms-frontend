import React from 'react';
import { Avatar, Grid, Typography, useMediaQuery, Paper } from '@mui/material';
import avatar from './Assets/images.jpeg';

const ProfilePage = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const user = {
    firstName: 'Max',
    lastName: 'Shodan',
    position: 'Manager',
    email: 'max12345@example.com',
    phoneNumber: '+233 558888892',
    bio: 'Team Manager',
  };

  return (
    <Grid container spacing={4} marginLeft={15}>
      {/* My Profile */}
      <Grid item xs={12}>
        <Typography variant="h5" marginBottom={1} marginTop={1} sx={{ fontWeight: 'bold' }} color="secondary">
          My Profile
        </Typography>
      </Grid>
      <Grid item xs={12} container alignItems="center" spacing={1}>
        <Grid item>
          <Avatar
            alt="User Profile"
            src={avatar}
            style={{ marginLeft: '10px' }}
            sx={{ width: isSmallScreen ? 40 : 70, height: isSmallScreen ? 40 : 70 }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 15 }}>
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          <Typography variant="subtitle1">{user.position}</Typography>
        </Grid>
      </Grid>

      {/* Personal Information */}
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }} color="secondary">
          Personal Information
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={4} sx={{ p: 1, borderRadius: 4, maxHeight: '100px'}}>
          <Typography variant="subtitle1">First Name</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>{user.firstName}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={4} sx={{ p: 1, borderRadius: 4, maxHeight: '100px'}}>
          <Typography variant="subtitle1">Last Name</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>{user.lastName}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={4} sx={{ p: 1, borderRadius: 4, maxHeight: '100px'}}>
          <Typography variant="subtitle1">Email Address</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>{user.email}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={4} sx={{ p: 1, borderRadius: 4, maxHeight: '100px'}}>
          <Typography variant="subtitle1">Phone Number</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>{user.phoneNumber}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={4} sx={{ p: 1, borderRadius: 4, maxHeight: '100px'}}>
          <Typography variant="subtitle1">Bio</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>{user.bio}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
