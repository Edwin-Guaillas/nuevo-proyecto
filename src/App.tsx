<<<<<<< HEAD
import Componente from './app/pages/Drawer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
=======
import { Typography } from '@mui/material';

import CardModal from './app/pages/CardModal';

>>>>>>> 369b12d86dd49c11410639a04bfd0bf1c0ea8975
import LoginPrincipal from './app/views/auth/login/LoginApp';




function App() {
  return (
<<<<<<< HEAD

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Componente />}></Route>
        <Route path="/login" element={<LoginPrincipal />}></Route>
      </Routes>
    </BrowserRouter>
=======
    <Typography>

      <CardModal />

      < LoginPrincipal />

    </Typography>
>>>>>>> 369b12d86dd49c11410639a04bfd0bf1c0ea8975
  );
}

export default App;
