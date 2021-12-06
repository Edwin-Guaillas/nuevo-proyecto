import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';





export default function Login() {

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
                        <label>Ingrese su Email</label>
                        <br />
                        <input placeholder="usuario" color='primary' />

                        <TextField
                            fullWidth
                            autoFocus
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Usuario'
                            name='nombre'
                        />
                        <label>Ingrese su Email</label>
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
                        <label></label>
                        <br />
                    </form>
                </div>
            </Container>
        </Grid>
    );
}