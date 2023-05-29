"use client";
import useSwr from 'swr';
import ProductsCarousel from './corousel';
import CardSpesial from '../cardSpesial';
import products from '../../../utils/data/products';
// import { CardSpesial } from '@/components/cardSpesial';
// import { Image } from 'next/image';

function ProductsFeatured () {
  const fetcher =  (url: string) => fetch(url).then((res) => res.json());
  const { data } =  useSwr('/api', fetcher);
  console.log(data,"berhasil");


  

return (
<section className="section section-products-featured">
  <div className="container">
    <header className="section-products-featured__header">
      <div className="text-black">
        <h3 className="font-bold text-black">Spesial Hari Ini</h3>
        <h3>Promo hanya untukmu khusus hari ini</h3>
        {/* <a href="/products" className="btn btn--rounded btn--border">Tampilkan Semua</a> */}
      </div>

    </header>


    {/*
    <ProductsCarousel products={data} /> */}
    
    {/* <CardSpesial products={data} /> */}
  </div>
</section>

);
}

export default ProductsFeatured