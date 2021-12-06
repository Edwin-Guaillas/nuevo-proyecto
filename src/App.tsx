import Componente from "./app/pages/Drawer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPrincipal from "./app/views/auth/login/LoginApp";
import BasicModal from "./app/pages/CardModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPrincipal />}></Route>
        <Route path="/modal" element={<BasicModal />}></Route>
        <Route path="/lista-albums" element={<Componente />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
