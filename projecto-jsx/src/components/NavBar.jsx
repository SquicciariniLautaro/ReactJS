import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
return (
    <nav>
    <Link to="/">Inicio</Link>
    <Link to="/category/vehiculos">Vehículos</Link>
    <Link to="/category/electronica">Electrónica</Link>
    <Link to="/category/muebles">Muebles</Link>
    <Link to="/cart">Carrito</Link>
    </nav>
);
}

export default Navbar;