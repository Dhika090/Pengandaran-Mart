import { FaRegEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
export default function register(){
return(
<>

  <body>
    <section className="flex items-stretch min-h-screen text-black ">
      <div className="relative items-center hidden w-1/2 bg-no-repeat bg-cover bg-sky-100 lg:flex">
        <div className="absolute inset-0 z-0 bg-white opacity-60"></div>
        <div className="z-10 w-full ">
          <h1 className="top-0 my-6">
            <Image src="/images/textnlogo.svg" width={300} height={10} alt="icon" className='mx-auto' />
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 space-x-4 text-center">
        </div>
      </div>
      <div className="z-0 flex items-center justify-center w-full px-0 text-center bg-white lg:w-1/2 md:px-16">
        <div className="absolute inset-0 z-10 items-center bg-white bg-no-repeat bg-cover lg:hidden">
          <div className="absolute inset-0 z-0 bg-white opacity-60"></div>
        </div>
        <div className="z-20 w-full py-6 ">
          <div className="mx-8 text-left">
            <h2 className="mb-2 text-3xl font-bold text-black">Daftar</h2>
            <p className="mb-2 text-black align-text-top ">Silakan daftar menggunakan nomor telepon
            </p>
            <form className="flex flex-col w-full mt-6 sm:w-2/3 lg:px-0 ">
              <div className="flex mb-4">
                <div className="relative mb-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Image src="/images/logobendera.svg" className='mt-2' width={20} height={0} alt="icon" />
                  </div>
                  <input type="number"
                    className="block w-24 py-2 pl-10 mt-2 text-sm text-gray-700 bg-white border rounded-md focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder='+62' disabled />
                </div>
                <div className="relative w-full pl-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                      viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input type="number"
                    className="block w-full px-3 py-2 pl-10 mt-2 text-sm text-gray-700 bg-white border rounded-md focus:border-gray-500 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Masukan nomor telp anda" required />
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Image src="/images/key.svg" className='mt-2' width={20} height={0} alt="icon" />
                </div>
                <input type="password"
                  className="block w-full p-4 px-3 py-2 pl-10 mt-2 text-sm text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Masukan password anda" required />
              </div>
              <div className="py-4 mt-2">
                <button type="submit"
                  className="float-left w-2/5 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-blue-950 hover:bg-blue-200 focus:outline-none focus:bg-gray-600">
                  Lanjut
                </button>
                {/* <a href={''}
                  className="float-left w-2/5 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-blue-950 hover:bg-blue-200 focus:outline-none focus:bg-gray-600">
                  Lanjut
                </a> */}
              </div>
              <span className="mt-3 text-black ">Sudah punya akun?
                <Link href={'/'} className="text-xs font-semibold text-blue-950 hover:underline"> Masuk di sini
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  </body>
</>



)
}