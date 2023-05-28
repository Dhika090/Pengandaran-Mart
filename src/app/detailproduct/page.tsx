import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProductDetail from "./../../components/productDetail";



export default function Product(){
return(

<body>
    <Navbar />
    <div className="min-h-screen px-16 pt-10 bg-gray-100 ">
        <h2 className='pt-8 pb-6 pl-8 text-2xl font-bold text-black'>Beranda / Hasil Laut Pangandaran</h2>
        
        <ProductDetail />

        <br />
        {/* <BannerTwo /> */}
        <br />
        {/* <Mitra /> */}
        <br />


    </div>

    <Footer />
</body>
)
}