import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux'; // mengirimkan aksi

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './assets/memories.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch(); // define dispatch in useEffect
  const classes = useStyles();

  useEffect(() => {
    // meminta getPost 
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar sx={classes.appBar} position="static" color="inherit">
        <Typography sx={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;