import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';






interface Props {
    image: string;
    title: string;
    description: string;
}

export default function MediaCards({ image, title, description }: Props) {

    return (
        <Card sx={{ maxWidth: 293, height: 355 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://www.hofmann.es/blog/wp-content/uploads/2021/07/1-Travel.jpg"
                    alt="Cargando..."
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2" color="initial">
                        {title}                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                <Button size="small" color="primary">Editar</Button>
                <Button size="small" color="error">Eliminar</Button>
                <Button size="small">Compartir</Button>

            </CardActions>
        </Card>
    );
}