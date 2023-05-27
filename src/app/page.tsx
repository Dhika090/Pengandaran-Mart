import Navbar from './../components/navbar';
import Banner from '@/components/banner';
import CategoryButtons from './../components/categoryButtons';
import ProductLaris from '@/components/productLaris';
import CardSpesial from '@/components/cardSpesial';
import ProductLaut from '@/components/productLaut';
import BannerTwo from '@/components/bannerTwo';
import Mitra from '@/components/mitra';
import Footer from '@/components/footer';


export default function pageHome(){
return(
<>

  <body>
    <Navbar />

    <div className="min-h-screen px-16 pt-10 bg-white ">
      <Banner />

      <h2 className='pt-8 pb-6 pl-8 text-2xl font-bold text-black'>Kategori</h2>
      <CategoryButtons />
      <br />

      <CardSpesial />
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