import React from 'react';
import './App.css';
import { Avatar, Container, Grid, Paper, TextField, Typography, Button } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/Lock';





function App() {
  return (
    <Grid container component='main'>
      <Container component={Paper} elevation={5} maxWidth='xs'>
        <div>
          <Avatar className='avatar'>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Ingresar
          </Typography>
          <form>
            <TextField
              fullWidth
              autoFocus
              color='primary'
              margin='normal'
              variant='outlined'
              label='Usuario'
              name='nombre'
            />

            <TextField
              fullWidth
              autoFocus
              color='primary'
              margin='normal'
              variant='outlined'
              label='Contraseña'
              name='contraseña'
            />
            <br />
            <Button
              fullWidth
              variant="contained"
              color="primary"
            >
              Ingresar
            </Button>
            <br />
          </form>
        </div>
      </Container>
    </Grid>

  );
}

export default App;
