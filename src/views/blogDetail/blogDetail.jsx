import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}/`)
      .then(res => {
        setProduct(res.data);
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
      {/* rest of the component */}
    </div>
  );
}

export default BlogDetail;
