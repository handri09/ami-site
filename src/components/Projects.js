import React from 'react'
import { Grid } from '@mui/material'
import { actus } from '../utils/_data'
import AlignList from './mui/AlignListItem'
import { AspectRatio } from '@chakra-ui/react'

// function Projects () {
//   return (
//     <Grid container spacing={2} sx={{ width:'100%' }}>
//       {actus.map(actu => (
//         <Grid item xs={12} sm={3} md={2} lg={1.5} xl={1}>
//           <img src={actu.picture} style={{ width: '100%', height: '100%'}}/>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

function Projects () {
  return (
    <Grid container spacing={2} sx={{ width:'100%' }}>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <AspectRatio maxW='560px' ratio={1}>
          <iframe
            title='naruto'
            src='https://www.youtube.com/embed/QhBnZ6NPOY0'
            allowFullScreen
          />
        </AspectRatio>
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