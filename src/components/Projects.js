import React from 'react'
import { Grid } from '@mui/material'
import { actus } from '../utils/_data'
import AlignList from './mui/AlignListItem'
import { AspectRatio } from '@chakra-ui/react'

function Projects () {
  return (
    <Grid container spacing={2} sx={{ width:'100%' }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      </Grid>

      {actus.map(actu => (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <AlignList />
        </Grid>
      ))}
    </Grid>
  );
}

export default Projects;