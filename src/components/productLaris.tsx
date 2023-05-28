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

export default function ProductLaris(){
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
                <div className="block w-40 p-2 mx-8 text-black bg-white border border-gray-200 rounded-lg">
                    <Image className="" src="/images/icon/JusHonje.svg" alt="ImageCards" width={150} height={100} />
                    <div className="p-2">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-black ">Jus Honje</h5>
                        <p className="mb-3 text-xs font-normal text-black ">250 gr.</p>
                        <h2 className="mb-2 text-sm font-bold tracking-tight text-black ">Rp10.00</h2>
                        <div className="grid grid-cols-2">
                            <a href="#"
                                className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
                                20%
                            </a>
                            {/* <h6 className="pt-2 pl-2 text-xs"><s>Rp.4000-</s></h6> */}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="block w-40 p-2 mx-8 text-black bg-white border border-gray-200 rounded-lg">
                    <Image className="" src="/images/icon/KeripikPangkis.svg" alt="ImageCards" width={150}
                        height={100} />
                    <div className="p-2">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-black ">Keripik Pakis</h5>
                        <p className="mb-3 text-xs font-normal text-black ">1250 gr.</p>
                        <h2 className="mb-2 text-sm font-bold tracking-tight text-black ">Rp15.000</h2>
                        <div className="grid grid-cols-2">
                            <a href="#"
                                className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
                                20%
                            </a>
                            {/* <h6 className="pt-2 pl-2 text-xs"><s>Rp.50.000-</s></h6> */}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="block w-40 p-2 mx-8 text-black bg-white border border-gray-200 rounded-lg">
                    <a href="/detailproduct">
                        <Image className="" src="/images/icon/IkanJambal.png" alt="ImageCards" width={150}
                            height={10} />
                    </a>
                    <div className="p-2">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-black ">Ikan Jambal Segar</h5>
                        <p className="mb-3 text-xs font-normal text-black ">500 gr.</p>
                        <h2 className="mb-2 text-sm font-bold tracking-tight text-black ">Rp68.000</h2>
                        <div className="grid grid-cols-2">
                            <a href="/detailproduct"
                                className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
                                20%
                            </a>
                            {/* <h6 className="pt-2 pl-2 text-xs"><s>Rp.25.000-</s></h6> */}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="block w-40 p-2 mx-8 text-black bg-white border border-gray-200 rounded-lg">
                    <Image className="" src="/images/icon/cumi.svg" alt="ImageCards" width={150} height={100} />
                    <div className="p-2">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-black ">Cumi</h5>
                        <p className="mb-3 text-xs font-normal text-black ">500 gr.</p>
                        <h2 className="mb-2 text-sm font-bold tracking-tight text-black ">Rp45.000</h2>
                        <div className="grid grid-cols-2">
                            <a href="#"
                                className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
                                20%
                            </a>
                            {/* <h6 className="pt-2 pl-2 text-xs"><s>Rp.30.000-</s></h6> */}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="block w-40 p-2 mx-8 text-black bg-white border border-gray-200 rounded-lg">
                    <Image className="" src="/images/icon/udang.svg" alt="ImageCards" width={150} height={100} />
                    <div className="p-2">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-black ">Udang</h5>
                        <p className="mb-3 text-xs font-normal text-black ">500 gr.</p>
                        <h2 className="mb-2 text-sm font-bold tracking-tight text-black ">Rp18.000</h2>
                        <div className="grid grid-cols-2">
                            <a href="#"
                                className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
                                20%
                            </a>
                            {/* <h6 className="pt-2 pl-2 text-xs"><s>Rp.4000,-</s></h6> */}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
    </div>
</>
);
}