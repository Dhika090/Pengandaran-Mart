"use client";
import Image from "next/image";
import { useState } from 'react';

import Link from 'next/link';
export default function productDetail(){

const [count, setCount] = useState<number>(0);
    return(
    <div className="relative block w-full max-w-6xl px-6 pt-10 mx-auto bg-white shadow-xl h-2/4 pb-9 rounded-2xl md:w-full">
        <div className="relative text-black bg-no-repeat bg-cover md:flex">
            <div className="inset-0 z-0 "></div>
            <div className="block p-2 mx-8 text-black bg-white border border-gray-200 rounded-lg md:w-1/2">
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full mx-auto rounded-lg" src="/images/ikanJambal.png" width={400}
                            height={10} alt="images" />
                    </div>
                    <div className="grid grid-cols-3 gap-6 mx-auto">
                        <div>
                            <Image className="h-auto max-w-full rounded-lg" src="/images/meatFish.png" width={150}
                                height={10} alt="images" />
                        </div>
                        <div>
                            <Image className="h-auto max-w-full rounded-lg" src="/images/meat.png" width={150}
                                height={10} alt="images" />
                        </div>
                        <div>
                            <Image className="h-auto max-w-full rounded-lg" src="/images/ikanPatin.png" width={150}
                                height={10} alt="images" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-16 mx-auto align-text-top md:w-5/12">
                <h2>Ikan Jambal Segar</h2>
                <br />
                <h4 className="font-bold">Rp68.000</h4>
                <div className="grid grid-cols-3 gap-16 pt-8 mx-auto md:flex">
                    <div>
                        <span>Terjual 200</span>
                    </div>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>First star</title>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <span className="text-xs">4.8 (100 Rating) </span>
                    </div>
                    <div className="flex items-center">
                        <Image className="h-auto max-w-full rounded-lg" src="/images/icon/iconMessage.svg" width={20}
                            height={10} alt="icon" />
                        <p className="text-sm">60 Ulasan</p>
                    </div>
                </div>
                <div className="grid items-center grid-cols-2 pt-6 mx-auto mb-8 text-center gap-14">
                    <div className="quantity-button">
                        <div
                            className="px-4 py-2 mx-auto font-semibold text-blue-900 bg-transparent border border-blue-900 roundedhover:border-transparent">
                            <button type="button" onClick={()=> setCount(count - 1)} className="float-left quantity-button__btn">
                                -
                            </button>
                            <span>{count}</span>
                            <button type="button" onClick={()=> setCount(count + 1)} className="float-right quantity-button__btn">
                                +
                            </button>
                        </div>
                    </div>
                    <h4 className="text-left">Stok 200</h4>
                </div>

                <Link type="button" href="/"
                    className="px-4 py-2 font-semibold text-white bg-transparent border rounded-lg  hover:text-black bg-[#224859]  hover:bg-[#224859] focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0 dark:bg-[#224859]">Keranjang
                </Link>
                <a type="button" href="https://wa.me/+6282219677226?text=Halo Admin"
                    className="px-4 py-2 ml-4 font-semibold text-blue-700 bg-transparent border border-blue-900 rounded-lg hover:bg-blue-900 hover:text-black hover:border-transparent">
                    Beli Sekarang
                </a>
                <hr className="mt-8 border border-gray-200" />
                <div className="flex w-full mt-6">
                    <p className="flex items-center text-xs text-black">45 orang telah membeli produk ini</p>
                    <a className="flex h-10 px-4 py-2 ml-auto bg-transparent border border-blue-900 rounded-lg w-14 hover:bg-blue-900 hover:border-transparent">
                      <Image src="./images/icon/love.svg" width={35} height={20} alt="icon"/>
                    </a>
                    <a className="h-10 px-4 py-2 ml-4 bg-transparent border border-blue-900 rounded-lg w-14 hover:bg-blue-900 hover:border-transparent">
                    <Image src="./images/icon/share.svg" width={35} height={20} alt="icon"/>
                    </a>
                </div>


            </div>




        </div>

    </div>
    )
    }