import { Typography } from '@mui/material';
import Componente from './app/pages/Drawer';



const init = () => {
  let sessionUser: any = sessionStorage.getItem('user');
  let user: any;
  if (!sessionUser) {
    user = sessionUser;
  } else {
    user = JSON.parse(sessionUser);
  }
  return user;
}



function App() {
  return (
    <Typography>
      <Componente />
    </Typography>
  );
}

export default App;
