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

export default function ProductRekomendasi() {
return (
<>
    <h2 className='pt-8 pb-4 pl-8 text-2xl font-bold text-black'>Rekomendasi Produk Lainnya</h2>
    <div className="pb-12">
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
                <div className="block w-40 p-2 mx-8 text-black bg-white border border-gray-200 rounded-lg">
                    <Image className="" src="/images/ikanLayang.png" alt="ImageCards" width={150} height={100} />
                    <div className="p-2">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-black ">Ikan Layang</h5>
                        <p className="mb-3 text-xs font-normal text-black ">500 gr.</p>
                        <h2 className="mb-2 text-sm font-bold tracking-tight text-black ">Rp40.00</h2>
                        <div className="grid grid-cols-2">
                            <a href="#"
                                className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
                                20%
                            </a>
                            <h6 className="pt-2 pl-2 text-xs"><s>Rp.50.00-</s></h6>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="block w-40 p-2 mx-8 text-black bg-white border border-gray-200 rounded-lg">
                    <Image className="" src="/images/ikanTenggiri.png" alt="ImageCards" width={150} height={100} />
                    <div className="p-2">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-black ">Ikan Tenggeri</h5>
                        <p className="mb-3 text-xs font-normal text-black ">500 gr.</p>
                        <h2 className="mb-2 text-sm font-bold tracking-tight text-black ">Rp28.000</h2>
                        <div className="grid grid-cols-2">
                            <a href="#"
                                className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-transparent rounded-lg focus:ring-4 focus:outline-none ">
                                20%
                            </a>
                            <h6 className="pt-2 pl-2 text-xs text-transparent"><s>Rp.50.000-</s></h6>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="block w-40 p-2 mx-8 text-black bg-white border border-gray-200 rounded-lg">
                    <Image className="" src="/images/ikanManyang.png" alt="ImageCards" width={150} height={10} />
                    <div className="p-2">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-black ">Ikan Manyang</h5>
                        <p className="mb-3 text-xs font-normal text-black ">500 gr.</p>
                        <h2 className="mb-2 text-sm font-bold tracking-tight text-black ">Rp3200</h2>
                        <div className="grid grid-cols-2">
                            <a href="#"
                                className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
                                20%
                            </a>
                            <h6 className="pt-2 pl-2 text-xs"><s>Rp.25.000-</s></h6>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="block w-40 p-2 mx-8 text-black bg-white border border-gray-200 rounded-lg">
                    <Image className="" src="/images/ikanGabus.png" alt="ImageCards" width={150} height={100} />
                    <div className="p-2">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-black ">Ikan Gabus</h5>
                        <p className="mb-3 text-xs font-normal text-black ">500 gr.</p>
                        <h2 className="mb-2 text-sm font-bold tracking-tight text-black ">Rp40.000</h2>
                        <div className="grid grid-cols-2">
                            <a href="#"
                                className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-transparent rounded-lg focus:ring-4 focus:outline-none ">
                                20%
                            </a>
                            <h6 className="pt-2 pl-2 text-xs text-transparent"><s>Rp.30.000-</s></h6>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="block w-40 p-2 mx-8 text-black bg-white border border-gray-200 rounded-lg">
                    <Image className="" src="/images/ikanTeri.png" alt="ImageCards" width={150} height={100} />
                    <div className="p-2">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-black ">Ikan Teri</h5>
                        <p className="mb-3 text-xs font-normal text-black ">500 gr.</p>
                        <h2 className="mb-2 text-sm font-bold tracking-tight text-black ">Rp24.000</h2>
                        <div className="grid grid-cols-2">
                            <a href="#"
                                className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
                                20%
                            </a>
                            <h6 className="pt-2 pl-2 text-xs"><s>Rp.24.000,-</s></h6>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
        </Swiper>
    </div>
</>
);
}