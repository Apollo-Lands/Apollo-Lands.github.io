import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle opening of the dropdown menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing of the dropdown menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: '#556B2F'}}>
      <Toolbar sx={{ minHeight: '90px' }}>
        {/* Left section: Apollo Lands Logo, Services, About */}
        <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
          {/* Apollo Lands Logo as an image */}
          <Link to="/">
            <img
              src="/Apollo Lands Logo.png"
              alt="Apollo Lands Logo"
              style={{ height: '160px', marginRight: '16px' }}
            />
          </Link>

          {/* Services Button with Dropdown Menu */}
          <Button
            color="inherit"
            onClick={handleMenuClick}
            sx={{ fontSize: '1.3rem', padding: '12px 24px' }} // Double font size and adjust padding
          >
            Services
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
                        <MenuItem onClick={handleClose} component={Link} to="/SellLand">
              Sell Land
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/PurchaseLand">
              Purchase Land
            </MenuItem>

            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/DroneVideography"
            >
              Drone Videography
            </MenuItem>
          </Menu>

          {/* About Button */}
          <Button
            color="inherit"
            component={Link}
            to="/About"
            sx={{ fontSize: '1.3rem', padding: '12px 24px' }} // Double font size and adjust padding
          >
            About
          </Button>
        </Box>

        {/* Right section: Contact Button */}
        <Box sx={{ display: 'flex' }}>
          <Button
            color="inherit"
            component={Link}
            to="/Contact"
            sx={{ fontSize: '1.3rem', padding: '12px 24px' }} // Double font size and adjust padding
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;


