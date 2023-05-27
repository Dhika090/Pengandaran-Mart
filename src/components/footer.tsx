import Image from "next/image";

export default function Footer(){
return(
<footer className="bg-[#E7F8FF]">
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
                <Image src="/images/textnlogo.svg" width={200} height={10} alt="icon" className='float-left mx-auto' />
                <br />
                <p className="max-w-xs mt-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                </p>
                <div className="flex mt-8 space-x-6 text-gray-600">
                    <a className="hover:opacity-75" href="/https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Facebook </span>
                        <Image src="/images/icon/facebook.svg" width={25} height={10} alt="icon" className='mx-auto' />
                    </a>
                    <a className="hover:opacity-75" href="/https://twitter.com/" target="_blank" rel="noreferrer">
                        <span className="sr-only"> twitter </span>
                        <Image src="/images/icon/twitter.svg" width={25} height={10} alt="icon" className='mx-auto' />
                    </a>
                    <a className="hover:opacity-75" href="/https://www.youtube.com/" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Youtbe </span>
                        <Image src="/images/icon/youtube.svg" width={25} height={10} alt="icon" className='mx-auto' />
                    </a>
                    <a className="hover:opacity-75" href="/https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Instagram </span>
                        <Image src="/images/icon/instagram.svg" width={25} height={10} alt="icon" className='mx-auto' />
                    </a>
                    <a className="hover:opacity-75" href="/https://wa.me/" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Whatsapp </span>
                        <Image src="/images/icon/whatsapp.svg" width={25} height={10} alt="icon" className='mx-auto' />
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 text-black lg:pl-64 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3 ">
                <div>
                    <p className="font-bold">
                    Layanan
                    </p>
                    <nav className="flex flex-col mt-4 space-y-2 text-sm text-black">
                        <a className="hover:opacity-75" href="/"> Home Delivery </a>
                        <a className="hover:opacity-75" href="/"> Customer Service </a>
                        <a className="hover:opacity-75" href="/"> Grosir </a>
                    </nav>
                </div>
                <div>
                    <p className="font-bold">
                        Profile
                    </p>
                    <nav className="flex flex-col mt-4 space-y-2 text-sm text-black">
                        <a className="hover:opacity-75" href="/"> Tentang </a>
                        <a className="hover:opacity-75" href="/"> Product </a>
                        <a className="hover:opacity-75" href="/"> Kontak </a>
                    </nav>
                </div>
                <div>
                    <p className="font-bold">
                    Metode Pembayaran
                    </p>
                    <nav className="flex flex-col mt-4 space-y-2 text-sm text-black">
                        <a className="hover:opacity-75" href="/"> Privacy Policy </a>
                        <a className="hover:opacity-75" href="/"> Terms &amp; Conditions </a>
                        <a className="hover:opacity-75" href="/"> Returns Policy </a>
                        <a className="hover:opacity-75" href="/"> Accessibility </a>
                    </nav>
                </div>
            </div>
        </div>
        <p className="mt-8 text-xs text-black">
            © 2023 Pengandaran - Mart
        </p>
    </div>
</footer>
)
}