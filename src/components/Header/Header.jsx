import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button, Hidden } from '@mui/material';
import { blue } from '@mui/material/colors';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  '@media all': {
    minHeight: 45,
  },
}));

export default function Header() {
  return (
    <Box sx={{
         flexGrow: 1,
         }}>
      <AppBar position="static" sx={{
          backgroundColor: 'white'
        }}>
        <StyledToolbar>
          <Button  variant="text">SUBSCRIBE</Button>
          <Typography 
          sx={{
            flexGrow: 1,
            marginLeft: 52,
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: 25,
            lineHeight: 1,
            letterSpacing: 10,
            color : 'black'
          }}>
            BLOG
          </Typography>

          <IconButton size="large" aria-label="search" color="inherit" 
          sx={{
            color: 'grey'
          }}>
            <SearchIcon />
          </IconButton>
          {/* <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton> */}
          <Button variant="outlined">SIGN UP</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

