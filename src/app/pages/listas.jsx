import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
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
                <Divider />

                <ListItemButton>
                    <ListItemIcon>
                        <AutoAwesomeMotionIcon />
                    </ListItemIcon>
                    <ListItemText primary='Recuerdos' />
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