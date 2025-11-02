import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Sistema de Cadastro Médico</h2>
      <div className="links">
        <Link to="/">Cadastro</Link>
        <Link to="/agendamento">Agendamento</Link>
        <Link to="/cancelamento">Cancelamento</Link>
      </div>
    </nav>
  );
}
