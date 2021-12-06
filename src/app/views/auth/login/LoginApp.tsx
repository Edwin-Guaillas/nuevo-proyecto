import { useState } from 'react';
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { makeStyles } from '@material-ui/core';





const useStyles = makeStyles((theme: any) => ({
    container: {
        opacity: '0.8',
        height: '60%',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            marginTop: 0,
            width: '100%',
            height: '100%'
        }
    },
    div: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(3, 0, 2)
    }
}))

const LoginPrincipal = () => {
    const [body, setBody] = useState({ usuario: '', password: '' })
    //@ts-ignore
    const classes = useStyles();


    const handleChange = (e: any) => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        console.log(body)
    }

    return (
        <Grid container component='main' >
            <CssBaseline />
            <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Avatar className={classes.avatar}>
                        <LockIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>Bienvenido</Typography>
                    <form className={classes.form}>
                        <TextField
                            fullWidth
                            autoFocus
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Usuario'
                            name='usuario'
                            value={body.usuario}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            type='password'
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Contraseña'
                            name='password'
                            value={body.password}
                            onChange={handleChange}
                        />
                        <Button
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={() => onSubmit()}
                        >
                            Ingresar
                        </Button>
                    </form>
                </div>
            </Container>
        </Grid>
    )
}

export default LoginPrincipal;
