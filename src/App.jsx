import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from "./componentes/Footer";

//páginas
import Inicio from "./pages/Inicio";
import Projetos from "./pages/Projetos";
import Certificados from "./pages/Certificados";
import SobreMim from "./pages/SobreMim";

function App() {

  return (
    <>
      <BrowserRouter>
        < Navbar />
        <div className="border-x-12 border-sky-800 dark:border-black">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/certificados" element={<Certificados />} />
            <Route path="/sobremim" element={<SobreMim />} />
          </Routes>
        </div>
        < Footer />
      </BrowserRouter>
    </>
  );
}

export default App