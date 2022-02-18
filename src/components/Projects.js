import React from 'react'
import { Grid, Button } from '@mui/material'
import { actus } from '../utils/_data'
import AlignList from './mui/AlignListItem'
import { AspectRatio } from '@chakra-ui/react'
import './styles/projects.css'
import { Text, Stack, Heading } from '@chakra-ui/react'
import { getActions, addAction, generateUID } from '../utils/api'
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Input = styled('input')({
  display: 'none',
});

function Projects () {
  const [actionsS, setActions] = useState([])
  const [name, setName] = useState('')
  const [fileName, setFile] = useState('')
  const [story, setStory] = useState('')
  const [send, setSend] = useState(false)
  useEffect(() => {
    getActions()
      .then(actions => {
        setActions(actions)
      })
  }, [actionsS])

  useEffect(() => {
    if (send) {
      addAction({
        'name': name,
        'picture': fileName,
        'story': story,
      })
      setSend(false)
    }
  }, [send])

  return (
    <Grid container className='block' >
      <Grid container className='vid'>
        <form action='https://caj6tw.deta.dev/upload' encType='multipart/form-data' method='post' >
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" name='file' type='file' onChange={(e) => {
              console.log(e)
              setFile(e.target.value.split('\\')[2])
              }}/>
            <TextField 
              fullWidth 
              label="Name" 
              id="fullWidth" 
              onChange={(e) => setName(e.target.value)}
              style={{ width: '95%', margin:'1%' }}
              />
            <TextField 
              fullWidth 
              color='primary'
              label="Story" 
              id="fullWidth" 
              onChange={(e) => setStory(e.target.value)}
              style={{ width: '95%', margin: '1%' }}
              />
            <Button variant="contained" component="span" endIcon={<PhotoCamera />}>
              Upload
            </Button>{`${fileName}`}
            
          <Button 
            disabled={!fileName ? (!name && true ) : false}
            type='submit' endIcon={<SendIcon />} onClick={(e) => setSend(true)} >Send</Button>
          </label>
          <br/>
        </form>
      </Grid>

      {actionsS.map(actu => (
        <Grid key={actu.key} container className='vid' marginTop={1} textAlign='left'>
          <Grid item xs={3} sm={2} md={2} lg={2} xl={1}>
            <img alt={actu.picture} src={actu.picture} width='100%' />
          </Grid>
          <Grid item xs={9} sm={10} md={10} lg={10} xl={11}>
            <Stack spacing={0} padding='5%'>
              <Heading as='h2' size='2xl' isTruncated>
                {actu.name}
              </Heading>
              <Text fontSize='2xl' textAlign='adjust'>
                {actu.story}
              </Text>
            </Stack>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default Projects;