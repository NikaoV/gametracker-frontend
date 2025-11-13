import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎮 GameTracker</div>
      <ul className="menu">
        <li><Link to="/"> Inicio</Link></li>
        <li><Link to="/games">Mi biblioteca</Link></li>
        <li><Link to="/reviews">Reseñas</Link></li>
        <li><Link to ="/stats">Estadisticas</Link></li>
      </ul>
      <button className="login-btn">Iniciar Sesión</button>
    </nav>
  );
}

export default Navbar;