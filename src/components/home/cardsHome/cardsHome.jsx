import "./cardsHome.styles.css";

import minningImage from "../../../assets/images/minning.png";
import comunicacionImage from "../../../assets/images/comunicacion.png";

import { NavLink } from "react-router-dom";


function CardsHome({ details }) {
    // console.log(details);
  return (
    <div className="container my-5 bg-light">
      <h2 className="mb-4 custom-subtitle">INSIGHTS</h2>
      <div className="row g-4">
        {details.slice(-2).map((product) => (
          <div key={product.id} className="col-md-6">
            
            <NavLink to={`/insights/${product.id}`}>
            <div className="card">
              
                <img
                  src={`https://backend.sunquconsultoria.com/api${product.image}`}
                  alt={product.name}
                  className="card-img-top"
                  height="200"
                  
                />
              
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.short_description}</p>
                {/* <p className="card-text"><small className="text-muted">27 enero 2024</small></p> */}
              </div>
              <div className="card-hover-layer">
                <h3>{product.name}</h3>
                <p>{product.short_description}</p>
              </div>
            </div>
            </NavLink>

          </div>
        ))}

      </div>
    </div>
  );
}

export default CardsHome;
