
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Listas = () => {
    return (
        <div >
            <List component='nav' >
                <ListItemButton className="list">
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary='Fotos' />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary='Correos' />
                </ListItemButton>

                <Divider />

                <ListItemButton>
                    <ListItemIcon>
                        < AutoDeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary='Papeleria' />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary='Mis Contactos' />
                </ListItemButton>
            </List>
        </div>
    )
}
export default Listas;