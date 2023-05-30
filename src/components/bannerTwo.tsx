export default function BannerTwo(){
return(
<div className=" block w-full max-w-6xl px-6 pt-10 mx-auto bg-[#E7F8FF] shadow-xl h-2/4 pb-40 rounded-2xl">
    <div className="items-center justify-center pt-32 text-center text-blue-900 bg-no-repeat bg-cover ">
        <div className="inset-0 z-0 "></div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center ">Belanja Sekarang Juga dan Raih Keuntungannya
        </h5>
        <p className="mb-3 font-normal text-black">Bantu UMKM Pangandaran lebih mudah diakses
        </p>
        <div className="flex justify-center">
            <a type="button" href="/"
                className="px-4 py-2 text-sm font-medium text-center text-white bg-[#224859] rounded-lg hover:bg-[#224859] focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0 dark:bg-[#224859]">Belanja
                Sekarang</a>

            <a type="button" href="https://wa.me/+6282219677226?text=Halo Admin"
                className="px-4 py-2 ml-4 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
                Tanya Admin
            </a>

        </div>
    </div>

</div>
)
}