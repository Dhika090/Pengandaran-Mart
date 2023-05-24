import Image from 'next/image';

export default function checkout(){
return(

<div className="">
    <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <Image src="/images/textnlogo.svg" width={250} height={10} alt="icon" className="items-center mx-auto" />
        </div>
    </nav>

    <div className="py-8 text-black bg-gray-100 h-max-w-screen-xl">
        <div className="px-4 mx-auto ">
            <div className="flex flex-col gap-4 p-8 md:flex-row">
                <div className="md:w-3/4">
                    <div className="p-6 mb-4 bg-white rounded-lg shadow-md">
                        <div className="flex items-center px-8 pb-5">
                            <span className='text-xl font-semibold text-black'>Pesanan Anda akan dikirim ke
                                alamat</span>
                            <h6 className='ml-auto'>Ubah Alamat</h6>
                        </div>
                        <div
                            className="block max-w-full p-6 mx-8 text-black bg-white border border-gray-200 rounded-lg">
                            <h5 className="mb-2 font-bold tracking-tight text-black">Bapak Sugandi
                            </h5>
                            <p className="font-normal">Jln. Sukabirus Desa Buahlaya Kec. Pangandaran Kab.Pangandaran
                                4567</p>
                        </div>
                    </div>

                    <div className="p-6 mb-4 bg-white rounded-lg shadow-md">
                        <div className="flex items-center px-8 pb-5">
                            <span className='font-semibold text-black'>Pesanan Anda akan dikirim ke alamat</span>
                            <h6 className='ml-auto'>Ubah Alamat</h6>
                        </div>
                        <div
                            className="block max-w-full p-6 mx-8 text-black bg-white border border-gray-200 rounded-lg">
                            <h5 className="mb-2 font-bold tracking-tight text-black">Bapak Sugandi
                            </h5>
                            <p className="font-normal">Jln. Sukabirus Desa Buahlaya Kec. Pangandaran Kab.Pangandaran
                                4567</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="mb-4 text-lg font-semibold">Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Total Harga Pesanan</span>
                            <span>Rp25.000</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between mb-2">
                            <span>Diskon</span>
                            <span>Rp2.500</span>
                        </div>
                        <hr className="my-2" />
                        <form className='flex justify-between mt-6'>
                            <div className="relative z-0 w-3/6 mb-6">
                                <input type="email" name="floating_email" id="floating_email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-950 peer"
                                    placeholder=" " required />
                                <label htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Masukkan
                                    kode voucher</label>
                            </div>
                            <button type="button"
                                className="block h-8 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Gunakan</button>

                        </form>
                        <hr className="my-2" />
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Total</span>
                            <span className="font-semibold">$21.98</span>
                        </div>
                        <button className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg">Checkout</button>

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
)
}