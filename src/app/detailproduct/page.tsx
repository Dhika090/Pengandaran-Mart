import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProductDetail from "./../../components/productDetail";
import DeskripsiProduct from './../../components/deskripsiProduct';
import Testimonial from './../../components/testimonial';
import ProductRekomendasi from "@/components/productRekomendasi";



export default function Product(){
return(

<body>
    <Navbar />
    <div className="min-h-screen px-16 pt-10 bg-gray-100 md:w-full ">
        {/* <h2 className='pb-4 pl-8 text-2xl font-bold text-black '>Beranda / Hasil Laut Pangandaran</h2> */}
        <ProductDetail />
        <br />
        <DeskripsiProduct />
        {/* <Mitra /> */}
        <br />
        <Testimonial />
        <br />
        
        <ProductRekomendasi />

    </div>

    <Footer />
</body>
)
}