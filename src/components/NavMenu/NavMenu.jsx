import React from "react"
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export const NavMenu = () =>{
    return(
        <div>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={4.7}
          margin={4}
        >
        <a href="">Technology</a>
        <a href="">Design</a>
        <a href="">Culture</a>
        <a href="">Business</a>
        <a href="">Politics</a>
        <a href="">Opinion</a>
        <a href="">Science</a>
        <a href="">Health</a>
        <a href="">Style</a>
        <a href="">Travel</a>

        </Stack>
      </div>
    )
}