import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  console.log('ID parameter:', id);

  

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}/`)
      .then(res => {
        setProduct(res.data);
        console.log('Product data:', res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      {/* Render your blog details here using product data */}
      <h1>{product.name}</h1>
      <img src={`http://localhost:8000/api${product.image}`} alt={product.name} className="card-img-top" height="200"/>
      {/* rest of the component */}
      <p className="card-text">{product.short_description}</p>
    </div>
  );
}

export default BlogDetail;
