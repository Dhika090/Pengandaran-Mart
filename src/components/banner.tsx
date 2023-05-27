import Image from 'next/image';


export default function Banner(){
return(
<div className="relative block w-full max-w-6xl px-6 pt-10 mx-auto bg-[#E7F8FF] shadow-xl h-2/4 pb-9 rounded-2xl">
  <div className="relative items-center bg-no-repeat bg-cover md:flex">
    <div className="inset-0 z-0 "></div>
    <div className="z-10 ">
      <div className="max-w-sm p-6 text-black">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">Free Home Delivery 24 Jam</h5>
        </a>
        <p className="mb-3 font-normal text-black">Pesan sekarang juga dan dapatkan barang Anda dalam 1 jam saja!
        </p>
        <a href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2C5C73] rounded-lg hover:bg-[#2C5C73] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#2C5C73] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Benlaja Sekarang
          <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
    {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 space-x-4 text-center">
    </div> */}
    <div className="z-0 flex items-center justify-center w-full text-center lg:w-1/2 md:px-16">
      <div className="top-0 my-6">
        <Image src="/images/ilustration_jumbotron.png" width={400} height={10} alt="icon" className='mx-auto md:ml-28 lg:ml-16' />
      </div>
    </div>
  </div>

</div>
)
}