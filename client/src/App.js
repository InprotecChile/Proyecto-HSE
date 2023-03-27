import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Proyecto from "./pages/proyecto";
import Personal from "./pages/personal";
import Equipamiento from "./pages/equipamiento";
import Cuentas from "./pages/cuentas";
import Perfil from "./pages/perfil";

import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Login/>} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Routes>
          <Route path="/proyecto" element={<Proyecto/>} />
        </Routes>
        <Routes>
          <Route path="/personal" element={<Personal/>} />
        </Routes>
        <Routes>
          <Route path="/equipamiento" element={<Equipamiento/>} />
        </Routes>
        <Routes>
          <Route path="/cuentas" element={<Cuentas/>} />
        </Routes>
        <Routes>
          <Route path="/perfil" element={<Perfil/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
