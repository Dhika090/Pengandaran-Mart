"use client";
import React, { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
// import { ProductTypeList } from '../../../types';

import SwiperCore, { Autoplay } from 'swiper';
import { ProductTypeList } from "../../types";
import ProductItem from "./product-item";


SwiperCore.use([Autoplay]);

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
if(window.innerWidth > 768) {
slidesPerView = 4;
spaceBetween = 35;
centeredSlides = false;
}
if(window.innerWidth > 1024) {
slidesPerView = 4;
spaceBetween = 65;
centeredSlides = false;
}
}

type ProductsCarouselType = {
products: ProductTypeList[]
}

// const asd= ({ products }: ProductsCarouselType) => {
// if (!products) return <div>Loading</div>;

// return (
// <>
//     <h2 className='pt-8 pb-4 pl-8 text-2xl font-bold text-black'>Spesial Hari Ini</h2>
//     <h5 className='pt-2 pb-4 pl-8 text-black d'>Promo hanya untukmu khusus hari ini</h5>
//     <div className="products-carousel">
//         <Swiper autoplay={{ delay: 5000 }} spaceBetween={spaceBetween} loop={true} centeredSlides={centeredSlides} //
//             watchOverflow={true} slidesPerView={slidesPerView} className="swiper-wrapper">
//             {products.map(item => (
//             <SwiperSlide key={item.id}>
                
//                 <ProductItem id={item.id} name={item.name} price={item.price} color={item.color} //
//                     discount={item.discount} currentPrice={item.currentPrice} key={item.id} images={item.images} />
//                 </SwiperSlide>
//             ))}
//             </Swiper>
//         </div>
//     </>
// )
// }

// export default CardSpesial
const CardSpesial = ({ products }: ProductsCarouselType) => {
if (!products) return <div>Loading</div>;
return(
<>
    <h2 className='pt-8 pb-4 pl-8 text-2xl font-bold text-black'>Spesial Hari Ini</h2>
    <h5 className='pt-2 pb-4 pl-8 text-black d'>Promo hanya untukmu khusus hari ini</h5>
    <div className="pb-12">
        <Swiper autoplay={{ delay: 5000 }} spaceBetween={spaceBetween} loop={true} centeredSlides={centeredSlides}
            watchOverflow={true} slidesPerView={slidesPerView} pagination={{
            clickable: true,
          }} breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }} modules={[Pagination]} className="mySwiper">
             {products.map(item => (
            <SwiperSlide key={item.id}>
                
                <ProductItem id={item.id} name={item.name} price={item.price} color={item.color} //
                    discount={item.discount} currentPrice={item.currentPrice} key={item.id} images={item.images} />
                </SwiperSlide>
            ))}
       
            <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
    </div>
</>
)
}

export default CardSpesial