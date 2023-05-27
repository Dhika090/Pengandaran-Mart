export default function BannerTwo(){
return(
<div className=" block w-full max-w-6xl px-6 pt-10 mx-auto bg-[#E7F8FF] shadow-xl h-2/4 pb-40 rounded-2xl">
    <div className=" items-center pt-32 bg-no-repeat bg-cover text-blue-900 justify-center text-center">
        <div className="inset-0 z-0 "></div>
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight ">Belanja Sekarang Juga dan Raih Keuntungannya
        </h5>
        <p className="mb-3 font-normal text-black">Bantu UMKM Pangandaran lebih mudah diakses
        </p>
        <div className="p-4 ">
        <a type="button" href="/"
        className="px-4 py-2 text-sm font-medium text-center text-white bg-[#224859] rounded-lg hover:bg-[#224859] focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0 dark:bg-[#224859]">Belanja Sekarang</a>
        
        <a type="button" href="/"
            className="bg-transparent ml-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Tanya Admin
        </a>
        
        </div>
      {/* <div className="z-10 ">
            <div className="max-w-sm p-6 text-black justify-center items-center align-middle">
                <a href="#">

                </a>

            </div>
        </div> */}
    </div>

</div>
)
}