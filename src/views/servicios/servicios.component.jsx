import "./servicios.styles.css"
import { NavLink } from 'react-router-dom';



import NavbarComponent from '../../components/navbar/navbar.component';
import Construction from "../../components/utils/underconstruction/construction.component";

import LoadingImage from '../../assets/images/loading.png';
import Button from 'react-bootstrap/Button';




function Servicios(){
 

    return (
        <div>
                    <NavbarComponent/>
                    <Construction/>

                    
            

        </div>

        
    );
}

export default Servicios;