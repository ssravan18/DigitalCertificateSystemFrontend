import React from 'react';
import { useState } from 'react';
import { AppBar, Button, Toolbar, Typography, Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useNavigate } from "react-router-dom";

const CustomAppBar = ({title}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [role, setRole] = useState('user');
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    sessionStorage.removeItem("jwToken");
    sessionStorage.removeItem("role");
    navigate("/login");
  }

  const handleBalance = () => {
    handleClose();
    navigate("/balance");
  }

  const handleProfile = () => {
    handleClose();
    navigate("/profilePage");
  }



  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', fontSize: '30px', marginLeft: '10px' }}>
          {title}
        </Typography>

        <NotificationsIcon style={{ marginRight: '15px' }}/>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          color="inherit"
        >
          <Avatar />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleProfile}>Profile</MenuItem>
          { role != "User" ? <MenuItem
           onClick={handleBalance}>Balance
          </MenuItem> : <MenuItem onClick={handleClose}>Account</MenuItem>}
          
          
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
