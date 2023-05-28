import Image from "next/image";

export default function productDetail(){
return(
<div className="relative block w-full max-w-6xl px-6 pt-10 mx-auto bg-white shadow-xl h-2/4 pb-9 rounded-2xl">
    <div className="relative  bg-no-repeat bg-cover md:flex ms:flex text-black">
        <div className="inset-0 z-0 "></div>
        <div className="block w-1/2 p-2 mx-8 text-black bg-white border border-gray-200 rounded-lg">
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/images/ikanJambal.png" width={400} height={10}
                        alt="images" />
                </div>
                <div className="grid grid-cols-3 gap-6 mx-auto">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/images/meatFish.png" width={150}
                            height={10} alt="images" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/images/meat.png" width={150} height={10}
                            alt="images" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="/images/ikanPatin.png" width={150}
                            height={10} alt="images" />
                    </div>
                </div>
            </div>
        </div>
        <div className="align-text-top">
            <h2>Ikan Jambal Segar</h2>
            <br />
            <h4 className="font-bold">Rp68.000</h4>
            <div className="grid grid-cols-3 gap-24 mx-auto pt-8">
                <div>
                    <span>Terjual 200</span>
                </div>
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>First star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <span>4.8 (100)</span>
                </div>
                <div className="flex items-center">
                    <Image className="h-auto max-w-full rounded-lg" src="/images/icon/iconMessage.svg" width={20}
                        height={10} alt="icon" />
                    <p>60 Ulasan</p>
                </div>
            </div>
        </div>




    </div>

</div>
)
}