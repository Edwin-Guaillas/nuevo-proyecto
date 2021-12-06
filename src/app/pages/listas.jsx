
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import BedtimeIcon from '@mui/icons-material/Bedtime';


const Listas = () => {
    return (
        <div >
            <List component='nav' >
                <ListItemButton>
                    <ListItemIcon>
                        <BedtimeIcon color='disabled' />
                    </ListItemIcon>
                    <ListItemText primary='Tema' />
                    <ArrowRightIcon />
                </ListItemButton>    
                <ListItemButton>
                    <ListItemIcon>
                        <AutoAwesomeMotionIcon />
                    </ListItemIcon>
                    <ListItemText primary='Recuerdos' />
                    <ArrowRightIcon />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemIcon>
                        <AutoDeleteIcon color='error' />
                    </ListItemIcon>
                    <ListItemText className="texto" primary='Papeleria' />
                    <ArrowRightIcon />
                </ListItemButton>

            </List>
        </div>
    )
}
export default Listas;