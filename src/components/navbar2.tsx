"use client"
import Image from 'next/image';
import { useState } from 'react';
export default function NavBar2() {
const [navbar, setNavbar] = useState(false);

return (
<nav className="w-full bg-white shadow">
    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a href="/" className="flex i2tems-center">
                    <Image src="/images/textnlogo.svg" width={190} height={10} alt="icon" className='mx-auto' />
                </a>
                <div className="md:hidden">
                    <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={()=> setNavbar(!navbar)}
                        >
                        {navbar ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                        </svg>
                        ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        )}
                    </button>
                </div>

            </div>
        </div>
        <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"></path>
                </svg>
                <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cari di Pengandaran" />
        </div>

        <div>
            <div className={`flex-1 justify-self-center pb-11 md:block md:pb-0 md:mt-0 ${ navbar ? "block" : "hidden"
                }`}>
                <a type="button" href="/login"
                    className="float-right px-4 py-2 mr-3 text-sm font-medium tracking-wide text-center text-white transition-colors duration-200 transform rounded-md bg-blue-950 hover:bg-blue-200 focus:outline-none focus:bg-gray-600">Masuk</a>
                <a href="/" type="button" className='float-right pr-4'>
                    <Image src={'/images/icon/troli.svg'} width={25} height={10} alt='icon' /></a>
                <a href="/" type="button" className='float-right pr-4'>
                    <Image src={'/images/icon/message.svg'} width={25} height={10} alt='icon' /></a>
                {/* <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="text-gray-600 hover:text-blue-600">
                        <a href="javascript:void(0)">Home</a>
                    </li>
                    <li className="text-gray-600 hover:text-blue-600">
                        <a href="javascript:void(0)">Blog</a>
                    </li>
                    <li className="text-gray-600 hover:text-blue-600">
                        <a href="javascript:void(0)">About US</a>
                    </li>
                    <li className="text-gray-600 hover:text-blue-600">
                        <a href="javascript:void(0)">Contact US</a>
                    </li>
                </ul> */}
            </div>
        </div>
    </div>
</nav>
);
}