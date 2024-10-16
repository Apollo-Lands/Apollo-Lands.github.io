import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Apollo Lands. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
          <Link href="#" underline="hover">
            Privacy Policy
          </Link>
          <Link href="#" underline="hover">
            Terms of Service
          </Link>
          <Link href="#" underline="hover">
            Contact Us
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
