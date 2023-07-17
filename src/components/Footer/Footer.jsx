import React from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './footer.scss'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', margin: 10 }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent className="box">
      <Typography variant="h2" component="div" 
      sx={{
        width: 650,
      }}>
      Title of a longer featured blog post
      </Typography>
      <Typography variant="h5" 
      sx={{
        width: 620,
      }}>
        Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
      </Typography>
      <Button size="norm">Continue reading…</Button>
    </CardContent>
  </React.Fragment>
);

export const Footer = () => {
  return (
    <Box  sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}