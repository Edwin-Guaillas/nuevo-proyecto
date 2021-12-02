import Componente from './app/pages/Drawer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoginPrincipal from './app/views/auth/login/LoginApp';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Componente />}></Route>
        <Route path="/login" element={<LoginPrincipal />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
