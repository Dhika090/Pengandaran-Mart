"use client";
import { GetServerSideProps } from 'next'
// import Layout from '../../layouts/main';
import { useState } from 'react';
import Footer from '../../components/footer';
// import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
// types
// import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import Description from '../../components/product-single/description';
import Reviews from '../../components/product-single/reviews';
import { ProductType } from '../../../types';
import { server } from '../../../utils/server';

type ProductPageType = {
// products: ProductTypeList
product: ProductType
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
const pid = query.pid;
const res = await fetch(`${server}/api/product/${pid}`);
const product = await res.json();

return {
props: {
product,
},
}
}

const Product = ({ product }: ProductPageType) => {
const [showBlock, setShowBlock] = useState('description');
return (

<>
  <section className="product-single">
    <div className="container">
      <div className="product-single__content">
        {/* <Gallery images={product.images} /> */}
        <Content product={product} />
      </div>

      <div className="product-single__info">
        <div className="product-single__info-btns">
          <button type="button" onClick={()=> setShowBlock('description')} className={`btn btn--rounded ${showBlock ===
            'description' ? 'btn--active' : ''}`}>Description</button>
          <button type="button" onClick={()=> setShowBlock('reviews')} className={`btn btn--rounded ${showBlock ===
            'reviews' ? 'btn--active' : ''}`}>Reviews (2)</button>
        </div>

        <Description show={showBlock==='description' } />
        <Reviews show={showBlock==='reviews' } product={product} />
      </div>
    </div>
  </section>
  <div className="product-single-page">
    <ProductsFeatured />
  </div>
  <Footer />
</>
);
}

export default Product