"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";

export default function partnerShip(){

return (
<>
    <h2 className='pt-8 pb-4 pl-8 text-2xl font-bold text-black'>Product Laris Manis</h2>
    <h5 className='pt-2 pb-4 pl-8 text-black d'>Cobain produk yang paling banyak disukai oleh orang</h5>
    <div className="pb-12">
        <Swiper slidesPerView={1} spaceBetween={10} pagination={{
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
            <SwiperSlide>
                <Image src='/images/caritapng.png' width={50} height={10} alt="icon" className="mr-2" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/images/kabpengandaran.png' width={50} height={10} alt="icon" className="mr-2" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/images/unpad.png' width={50} height={10} alt="icon" className="mr-2" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/images/logoUnpad.png' width={50} height={10} alt="icon" className="mr-2" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/images/logoexpolore.png' width={50} height={10} alt="icon" className="mr-2" />
            </SwiperSlide>
            {/* <SwiperSlide>Slide 6</SwiperSlide> */}
        </Swiper>
    </div>
</>
);
}