import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Cadastro from "./components/Cadastro";
import Agendamento from "./components/Agendamento";
import Cancelamento from "./components/Cancelamento";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/cancelamento" element={<Cancelamento />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
