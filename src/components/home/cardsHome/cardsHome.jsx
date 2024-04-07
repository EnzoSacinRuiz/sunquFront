import "./cardsHome.styles.css"

import minningImage from '../../../assets/images/minning.png';
import comunicacionImage from '../../../assets/images/comunicacion.png';


import { NavLink } from "react-router-dom";



function CardsHome(){
    return(
        <div className="container my-5 bg-light">
            <h2 className="mb-4 custom-subtitle">INSIGHTS</h2>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card">
                        <img src={minningImage} />
                        <div className="card-body">
                            <h5 className="card-title">RETOS EN LA MINERÍA DEL 2024</h5>
                            <p className="card-text">Descubre los retos comunicacionales para sacar adelante una operación minera.</p>
                            {/* <p className="card-text"><small className="text-muted">27 enero 2024</small></p> */}
                        </div>
                        <div className="card-hover-layer">
                    <h3>RETOS EN LA MINERÍA DEL 2024</h3>
                    <p>Text to display on hover.</p>
                </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                    <img src={comunicacionImage} />
                        <div className="card-body">
                            <h5 className="card-title">POTENCIA LA COMUNICACIÓN DE TU NEGOCIO</h5>
                            <p className="card-text">Hoy en día la percepción de las personas de tu marca es muy importante. Aprende como mejorarla.</p>
                            {/* <p className="card-text"><small className="text-muted">ACTUALIDAD</small></p> */}
                        </div>
                        <div className="card-hover-layer">
                    <h3>POTENCIA LA COMUNICACIÓN DE TU NEGOCIO</h3>
                    <p>Text to display on hover.</p>
                </div>   
                    </div>
                </div>
                {/* ... more code ... */}
            </div>
            {/* <div className="row">
                <div className="col text-center">
                    <a href="#" className="btn btn-link">VER TODAS</a>
                </div>
            </div> */}
        </div>
    );
}

export default CardsHome;