import { AppBar, Button, Toolbar, Typography, Avatar, IconButton, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import CustomAppBar from './CustomAppBar';
import EditIcon from '@mui/icons-material/Edit';

const ProfilePage = () => {
  // Sample user data (you can replace this with actual user data)
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profilePhoto: 'https://via.placeholder.com/150', // Sample profile photo URL
    // Add more user information as needed
  });
  const [editedUser, setEditedUser] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
  });

  const handleEditOpen = () => {
    setEditedUser({
      name: user.name,
      email: user.email,
      bio: user.bio,
    });
    setOpenEditDialog(true);
  };

  const handleEditClose = () => {
    setOpenEditDialog(false);
  };

  const handleSaveChanges = () => {
    setUser({
      ...user,
      name: editedUser.name,
      email: editedUser.email,
      bio: editedUser.bio,
    });
    handleEditClose();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div style={{width : "100vw", height : "100vh", backgroundColor : "#eeeeee"}}>
      <CustomAppBar title="PROFILE" />
      
      
      
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <Button
            onClick={handleEditOpen}
            style={{ position: 'static', marginTop:'10px', marginLeft:'400px' }}
        >
            Edit<EditIcon />
        </Button>
        <Avatar  style={{ width: "150px", height: "150px", marginBottom: "20px" }} />
        
        <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
          <Typography variant="h6" style={{ marginBottom: "10px" }}>Name: {user.name}</Typography>
          <Typography>Email: {user.email}</Typography>
          <Typography style={{ marginTop: "10px" }}>Bio: {user.bio}</Typography>
        </div>
      </div>

      <Dialog open={openEditDialog} onClose={handleEditClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Bio"
            name="bio"
            value={editedUser.bio}
            onChange={handleInputChange}
            fullWidth
            multiline
          />
          <Button onClick={handleSaveChanges} variant="contained" color="primary" style={{ marginTop: "10px" }}>
            Save Changes
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfilePage;
