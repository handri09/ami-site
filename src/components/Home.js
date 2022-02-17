import React from 'react';
import { Grid, Avatar } from '@mui/material'
import { AspectRatio, Text, Stack, Heading, Image } from '@chakra-ui/react'
import './styles/home.css';

function Home () {
  return (
    <>
    <Grid container className='block' >

        <Grid xs={12} sm={6} md={5} lg={4} xl={4} className='vid'>
          <AspectRatio ratio={1}>
              <iframe
                title='Léonce'
                src='https://www.youtube.com/embed/QMyEdgGEfIg'
                allowFullScreen
              />
            </AspectRatio>
        </Grid>
        
        <Grid xs={12} sm={6} md={6.5} lg={7} xl={7}  sx={{ textAlign: 'left', padding: '15px'}}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={9} md={9} lg={9} xl={7}>
              <Stack spacing={2}>
                <Heading as='h1' size='4xl' isTruncated>
                  Léonce, AMI's President
                </Heading>
                <Text fontSize='6xl'>
                  AMI is aim to help the kids in needs, whether a scholarship or equipment scholars. 
                  One of the reason why we decided to create AMI is that we found that many children want to continue the school but 
                  their parents is having problem on investing in the schools.
                </Text>
              </Stack>
            </Grid>
            
            <Grid item xs={12} sm={2} md={3} lg={3} xl={3} >
              <img alt='logo-ami' src='./logoAmi.png' width='100%'/>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </>
    
  );
}

export default Home;
{/*
import { Text } from '@chakra-ui/react'
  <Stack spacing={3}>
  <Text fontSize='6xl'>(6xl) In love with React & Next</Text>
  <Text fontSize='5xl'>(5xl) In love with React & Next</Text>
  <Text fontSize='4xl'>(4xl) In love with React & Next</Text>
  <Text fontSize='3xl'>(3xl) In love with React & Next</Text>
  <Text fontSize='2xl'>(2xl) In love with React & Next</Text>
  <Text fontSize='xl'>(xl) In love with React & Next</Text>
  <Text fontSize='lg'>(lg) In love with React & Next</Text>
  <Text fontSize='md'>(md) In love with React & Next</Text>
  <Text fontSize='sm'>(sm) In love with React & Next</Text>
  <Text fontSize='xs'>(xs) In love with React & Next</Text>
</Stack>


        <Stack spacing={6}>
          <Heading as='h1' size='4xl' isTruncated>
            (4xl) In love with React & Next
          </Heading>
          <Heading as='h2' size='3xl' isTruncated>
            (3xl) In love with React & Next
          </Heading>
          <Heading as='h2' size='2xl'>
            (2xl) In love with React & Next
          </Heading>
          <Heading as='h2' size='xl'>
            (xl) In love with React & Next
          </Heading>
          <Heading as='h3' size='lg'>
            (lg) In love with React & Next
          </Heading>
          <Heading as='h4' size='md'>
            (md) In love with React & Next
          </Heading>
          <Heading as='h5' size='sm'>
            (sm) In love with React & Next
          </Heading>
          <Heading as='h6' size='xs'>
            (xs) In love with React & Next
          </Heading>
        </Stack>

*/
}