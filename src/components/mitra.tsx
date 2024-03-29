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
export default function Mitra(){

return (
<>
    <h2 className='pt-8 pb-4 pl-8 text-2xl font-bold text-black'>Partnership</h2>
    <h5 className='pt-2 pb-4 pl-8 text-black d'>PangandaranMart bekerja sama  dan didukung oleh partner. </h5>
    <div className="pb-12 pl-12 mr-4">
        <Swiper slidesPerView={2} spaceBetween={10} pagination={{
                    clickable: true,
                  }} breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
                <Image src='/images/carita.png' width={100} height={10} alt="icon" className="mr-2" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/images/kabpengandaran.png' width={100} height={10} alt="icon" className="mr-2" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/images/unpad.png' width={200} height={10} alt="icon" className="mr-2" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/images/logoUnpad.png' width={100} height={10} alt="icon" className="mr-2" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/images/logoexpolore.png' width={100} height={10} alt="icon" className="mr-2" />
            </SwiperSlide>
            {/* <SwiperSlide>Slide 6</SwiperSlide> */}
        </Swiper>
    </div>
</>
);
}