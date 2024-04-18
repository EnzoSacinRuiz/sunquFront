import "./construction.styles.css"


import { NavLink } from 'react-router-dom';



import NavbarComponent from '../../navbar/navbar.component';

import LoadingImage from '../../../assets/images/loading.png';
import Button from 'react-bootstrap/Button';




function Construction(){
 

    return (
        <div>
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
            <h1>Página en construcción</h1>
            <p> Esta página está actualmente en proceso. Vuelva a visitarla pronto.</p>
            <img src={LoadingImage} alt="Cargando" className="loadingImage text-dark"/>
            <NavLink to="/" className="btn btn-primary">Volver al menú principal</NavLink>

        </div>

        </div>

        
    );
}

export default Construction;