import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './Estilos.css';




const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 280,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Input = styled('input')({
    display: 'none',
});

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <ImageList sx={{ width: 200, height: 80 }} rowHeight={150} className="fondoColor" variant="masonry" >

                            <ImageListItem >
                                <img src="" alt="..." />
                            </ImageListItem>

                        </ImageList>
                        <label htmlFor="icon-button-file">
                            Insertar
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <IconButton aria-label="upload picture" component="span">
                                <AddPhotoAlternateIcon />
                            </IconButton>
                        </label>
                    </Stack>
                    <TextField
                        id="standard-basic"
                        label="Nombre del Album"
                        variant="standard"
                    />
                    <br />
                    <br />
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Descripcion"
                        style={{ width: 175 }}
                    />
                    <CardActions>
                        <Button size="small" color="secondary" startIcon={<DownloadDoneIcon />} variant="contained">
                            GUARDAR
                        </Button>
                        <Button size="small" color="error" startIcon={<CloseOutlinedIcon />} variant="outlined">
                            CANCELAR
                        </Button>
                    </CardActions>
                </Box>
            </Modal>
        </div>
    );
}