import { useEffect, useState } from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card } from "@mui/material";



const Api = () => {

    const url = 'https://jsonplaceholder.typicode.com/albums'

    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, []);

    return (

        <div className='App'>
            {!todos ? 'Cargando...' :
                todos.map((todo, index) => {
                    return <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://image.freepik.com/vector-gratis/album-fotos-logo_7688-145.jpg"
                            alt="Cargando..."
                        />
                        <CardContent>
                            <Typography variant="h6" color="initial">
                                {todo.id}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {todo.title}
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Button size="small">Favorito</Button>
                            <Button size="small">Compartir</Button>
                        </CardActions>
                    </Card>
                })
            }
        </div>


    );
};


export default Api;