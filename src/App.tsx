import Componente from './app/pages/Drawer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import BasicModal from './app/pages/CardModal';




function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Componente />}></Route>
        <Route path="/modal" element={<BasicModal />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
