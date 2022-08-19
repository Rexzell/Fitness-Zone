import React from 'react';
import { Box, Stack} from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#fff">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" p="30px">
      <img src={Logo} alt="logo" style={{ width: '260px', height: '120px' }} />
    </Stack>
  </Box>
);

export default Footer;