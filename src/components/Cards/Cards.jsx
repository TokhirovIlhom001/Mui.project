import React from "react"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './cards.scss'

export const Cards = () => {
    return (
    <div className="cards">
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex',  width: 450, height: 200 }}>
        <CardContent sx={{ flex: '1 0 auto', }}>
          <Typography component="div" variant="h5">
            Featured post
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Nov 12
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div1" >
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </Typography>
          <br />
          <Typography>
            <a href="#">
              Continue reading...
            </a>
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 170 }}
        image="https://source.unsplash.com/random?wallpapers"
        alt="Live from space album cover"
      />
    </Card>


    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex',  width: 450, height: 200 }}>
        <CardContent sx={{ flex: '1 0 auto', }}>
          <Typography component="div" variant="h5">
            Featured post
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Nov 12
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div1" >
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </Typography>
          <br />
          <Typography>
            <a href="#">
              Continue reading...
            </a>
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 170 }}
        image="https://source.unsplash.com/random?wallpapers"
        alt="Live from space album cover"
      />
    </Card>
    </div>
    );
}
