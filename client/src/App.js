import React, { useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import memories from '../src/images/memories.png';

import { getPosts } from './actions/posts.js'
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
    return (
        <Container maxidth="lg">
            <AppBar className='classes.appBar' position="static" color="inherit">
            <Typography className='classes.heading' variant="h2" align="center">Memories</Typography>
            <img className='classes.image' src={memories} alt={memories} height="860"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}></Grid>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}></Grid>
                    <Form />
                </Container>
            </Grow>
        </Container>
    )
}

export default App;