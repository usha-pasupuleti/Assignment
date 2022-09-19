import React from 'react';
import {Box, Button, Container} from '@mui/material';
import './Home.css';


function Home() {

    return(
        <div className='main'>
            <h1>Authnticate the sucessfully first.</h1>
            <br></br>
            
        <Container maxWidth="xs">
             
            <Box>
            <Button href='Login' variant="contained" color="secondary" fullWidth>Login</Button>
            </Box>
            </Container>
        </div>

    );
}

export default Home;