import React from 'react';
import { Grid, Avatar } from '@mui/material'
import { AspectRatio, Text, Stack, Heading, Image } from '@chakra-ui/react'
import './styles/home.css';

function Page () {
  return (
    <>
    <Grid container className='block' >

        <Grid item xs={12} sm={5} md={5} lg={4} xl={4} className='vid'>
          <AspectRatio ratio={1}>
              <iframe
                title='Léonce'
                src='https://www.youtube.com/embed/QMyEdgGEfIg'
                allowFullScreen
              />
            </AspectRatio>
        </Grid>
        
        <Grid item xs={12} sm={7} md={6.5} lg={7} xl={7}  sx={{ textAlign: 'left', padding: '15px'}}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={9} md={9} lg={9} xl={7}>
              <Stack spacing={2}>
                <Heading as='h1' size='4xl' isTruncated>
                  Léonce, AMI's President
                </Heading>
                <Text fontSize='6xl'>
                  AMI is an association of young people living at Ambohitsilaozana in Madagascar.
                  The association aim to help the kids in needs whether in terms of scholarship or schools equipments. 
                  One of the reason why AMI is created is, many children stoped school due to familly issue, sometimes lack motivation or not enough many to pursue the school.
                  Then AMI was created to help those kids with what we have.
                </Text>
                <Text fontSize='6xl'>
                  If you may help, below is the IBAN
                </Text>
                <Text fontSize='6xl'>
                  IBAN: MG 46 00005 0001 3729 5063 0001 80
                  Domiciliation: AMBATONDRAZAKA BNI
                  Titulaire: ASSOCIATION AMI - ANKIZY MIVOATRA NO IFANDROMBONANA
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

export default Page;