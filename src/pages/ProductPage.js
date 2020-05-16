import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = ({match}) => {
  return ( 
    <>
      <div>Product</div>
      <Product id={match.params.id} />
      <Link to="/products">Go back to the list of products</Link>
    </>
   );
}
 
export default ProductPage;