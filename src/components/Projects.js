

function Projects () {
  return (
    <Grid container spacing={2} sx={{ width:'100%' }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        <h2>Projects</h2>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={8} md={10} lg={10} xl={11}>
          <h4><em>Actions</em></h4>
        </Grid>
        <Grid item xs={12} sm={4} md={2} lg={2} xl={1}>
          <img src='enf1.jpg' style={{ width: '100%', height: '100%'}}/>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={4} md={2} lg={2} xl={1}>
          <img src='1.jpg' style={{ width: '100%', height: '100%'}}/>
        </Grid>
        <Grid item xs={12} sm={8} md={10} lg={10} xl={11}>
          <h4><em>Actions</em></h4>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={8} md={10} lg={10} xl={11}>
          <h4><em>Actions</em></h4>
        </Grid>
        <Grid item xs={12} sm={4} md={2} lg={2} xl={1}>
          <img src='2.jpg' style={{ width: '100%', height: '100%'}}/>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={8} md={10} lg={10} xl={11}>
          <h4><em>Actions</em></h4>
        </Grid>
        <Grid item xs={12} sm={4} md={2} lg={2} xl={1}>
          <img src='3.jpg' style={{ width: '100%', height: '100%'}}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Projects;