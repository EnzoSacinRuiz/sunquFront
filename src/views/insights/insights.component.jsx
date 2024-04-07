import "./insights.styles.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


import NavbarComponent from '../../components/navbar/navbar.component';

const products = [
    {
        pk: 1,
        name: "Product 1",
        short_description: "This is a short description of Product 1.",
        image: {
            url: "https://via.placeholder.com/150"
        },
        created_name: "John Doe",
        created_at: "2023-04-01",
        updated_at: "2023-04-02"
    },
    {
        pk: 2,
        name: "Product 2",
        short_description: "This is a short description of Product 2.",
        image: {
            url: "https://via.placeholder.com/150"
        },
        created_name: "Jane Doe",
        created_at: "2023-04-03",
        updated_at: "2023-04-04"
    },
    {
        pk: 3,
        name: "Product 3",
        short_description: "This is a short description of Product 3.",
        image: {
            url: "https://via.placeholder.com/150"
        },
        created_name: "Jim Doe",
        created_at: "2023-04-05",
        updated_at: "2023-04-06"
    }
];


function Insights() {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(res => {
                setDetails(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <NavbarComponent/>
            <div className="container mt-5">
                <h1>Las novedades</h1>
                <div className="row">
    {details.map(product => (
        <div key={product.id} className="col-md-4 mb-4">
            <div className="card" >
                <NavLink to={`/insights/${product.id}`}>
                    <img src={`http://localhost:8000/api${product.image}`} alt={product.name} className="card-img-top" height="200"/>
                </NavLink>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.short_description}</p>
                    {/* Other content */}
                </div>
            </div>
        </div>
    ))}
</div>

            </div>
        </div>
    );
}


export default Insights;