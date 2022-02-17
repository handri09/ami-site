import React from 'react'
import { Grid } from '@mui/material'
import { actus } from '../utils/_data'
import AlignList from './mui/AlignListItem'
import { AspectRatio } from '@chakra-ui/react'
import './styles/projects.css'
import { Text, Stack, Heading } from '@chakra-ui/react'

function Projects () {
  return (
    <Grid container className='block' >
      <Grid container className='vid'>
        <h1>Hello</h1>
      </Grid>

      {actus.map(actu => (
        <Grid container className='vid' marginTop={1}>
          <Grid item xs={3} sm={12} md={12} lg={12} xl={12}>
            <img alt={actu.name} src={actu.picture} width='100%' />
          </Grid>
          <Grid item xs={9} sm={12} md={12} lg={12} xl={12}>
              <Stack spacing={0}>
                <Heading as='h2' size='2xl' isTruncated>
                  Léonce, AMI's President
                </Heading>
                <Text fontSize='2xl'>
                  {actu.name}
                </Text>
              </Stack>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default Projects;