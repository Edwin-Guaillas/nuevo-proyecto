
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './Styles.css';
import BedtimeIcon from '@mui/icons-material/Bedtime';


const Listas = () => {
    return (
        <div >
            <List component='nav' className="listas">
                <ListItemButton>
                    <ListItemIcon >
                        <FacebookIcon color="info" />
                    </ListItemIcon>
                    <ListItemText className="texto" primary='Facebook' />
                    <ArrowRightIcon />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <YouTubeIcon color="error" />
                    </ListItemIcon>
                    <ListItemText className="texto" primary='Youtobe' />
                    <ArrowRightIcon />
                </ListItemButton>
                <Divider />

                <ListItemButton>
                    <ListItemIcon>
                        < AutoDeleteIcon />
                    </ListItemIcon>
                    <ListItemText className="texto" primary='Papeleria' />
                    <ArrowRightIcon />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <BedtimeIcon color='disabled' />
                    </ListItemIcon>
                    <ListItemText className="texto" primary='Tema' />
                    <ArrowRightIcon />
                </ListItemButton>
            </List>
        </div>
    )
}

export default Listas;