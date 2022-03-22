import React from 'react'
import { Grid, Button } from '@mui/material'
import { actus } from '../utils/_data'
import AlignList from './mui/AlignListItem'
import { AspectRatio } from '@chakra-ui/react'
import './styles/projects.css'
import { Text, Stack, Heading, Image } from '@chakra-ui/react'
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
          <Grid item xs={12} sm={2} md={3} lg={2} xl={2}>
            <AspectRatio maxW='300px' ratio={1}>
              <Image
                src={`https://caj6tw.deta.dev/download/${actu.picture}`}
                objectFit='cover'
              />
            </AspectRatio>
          </Grid>

          <Grid item xs={12} sm={10} md={9} lg={10} xl={10} >
            <Stack spacing={0} padding='5%'>
              <Heading as='h2' size='2xl' isTruncated className='text-blue-700 font-mono text-3xl font-bold'>
                {actu.name}
              </Heading>
              <Text fontSize='2xl' textAlign='adjust' className='font-mono leading-6'>
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