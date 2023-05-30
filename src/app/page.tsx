import Navbar from './../components/navbar';
import Banner from '@/components/banner';
import CategoryButtons from './../components/categoryButtons';
import ProductLaris from '@/components/productLaris';
import ProductLaut from '@/components/productLaut';
import BannerTwo from '@/components/bannerTwo';
import Mitra from '@/components/mitra';
import Footer from '@/components/footer'; 
import ProductsFeatured from '@/components/products-featured';
import CardSpesial from '@/components/cardSpesial';


export default function pageHome(){
return(
<>
  <body>
    <Navbar />  
    <div className="min-h-screen pt-10 bg-white md:px-16 px-4">
      <Banner />

      <h2 className='pt-8 pb-6 text-2xl font-bold text-black'>Kategori</h2>
      <CategoryButtons />
      <br />
      <CardSpesial />
      {/* <ProductsFeatured /> */}
      <ProductLaris />
      <ProductLaut />
      <br />
      <BannerTwo />
      <br />
      <Mitra />
      <br />


    </div>

    <Footer />


  </body>

</>
)
}