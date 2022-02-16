import React from 'react';
import { Grid } from '@mui/material'
import { AspectRatio } from '@chakra-ui/react'
import './styles/home.css';

function Home () {
  return (
    <div className='block'>
      <h1>TEST</h1>
      <AspectRatio ratio={1} className='video'> {/*maxW='560px'}*/}
        <iframe
          title='naruto'
          src='https://www.youtube.com/embed/QMyEdgGEfIg'
          allowFullScreen
        />
      </AspectRatio>
    </div>
  );
}

export default Home;