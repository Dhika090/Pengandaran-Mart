import Image from "next/image";


export default function CategoryButtons(){
return(
<div className="">
    <div className="grid gap-2 md:grid-cols-4 sm:grid-cols-2 ">
        <div className="...">
            <button type="button"
                className="text-blue-900 bg-[#E7F8FF] hover:bg-[#E7F8FF]/90 focus:ring-4 focus:outline-none focus:ring-[#E7F8FF]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#E7F8FF]/55 mr-2 mb-2">
                 <Image src='/images/icon/iconFish.svg' width={20} height={10} alt="icon" className="mr-3"/>
                Hasil laut Pengandaran
            </button>
        </div>
        <div className="...">
            <button type="button"
                className="text-blue-900 bg-[#E7F8FF] hover:bg-[#E7F8FF]/90 focus:ring-4 focus:outline-none focus:ring-[#E7F8FF]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#E7F8FF]/55 mr-2 mb-2">
               <Image src='/images/icon/ri_gift.svg' width={20} height={10} alt="icon" className="mr-3"/>
                Oleh-Oleh Khas Pangadaran
            </button>
        </div>
        <div className="...">
            <button type="button"
                className="text-blue-900 bg-[#E7F8FF] hover:bg-[#E7F8FF]/90 focus:ring-4 focus:outline-none focus:ring-[#E7F8FF]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#E7F8FF]/55 mr-2 mb-2">
                <Image src='/images/icon/mdi_cook.svg' width={20} height={10} alt="icon" className="mr-3"/>
                Resep Makanan
            </button>
        </div>
        <div className="...">
            <button type="button"
                className="text-blue-900 bg-[#E7F8FF] hover:bg-[#E7F8FF]/90 focus:ring-4 focus:outline-none focus:ring-[#E7F8FF]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#E7F8FF]/55 mr-2 mb-2">
                    <Image src='/images/icon/iconButton.svg' width={20} height={10} alt="icon" className="mr-3" />
                
                Tempat Oleh-Oleh
            </button>
        </div>
    </div>
</div>
)
}