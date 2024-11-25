import Image from "next/image";
import Header from "./_components/Header"
import Spotlight from "./_components/Spotlight"
import Experience from "./_components/Experience"
import FrameWork from "./_components/FrameWork"
import Advantages from "./_components/Advantages"
import Canva from "./_components/Canva"
import Faq from "./_components/Faq"
import Additional from "./_components/Additional"
import LottieFor from "./_components/LottieFor"
import Footer from "./_components/Footer"
import Product from "./_components/Product"
import Integrations from "./_components/Integrations"
import Customers from "./_components/Customers"
import Education from "./_components/Education"

export default function Home() {
  return (
   <>
   <Header/>
   <Spotlight/>
   <Experience/>
   <FrameWork/>
   <Advantages/>
   <Canva/>
   <Faq/>
   <Additional/>
   <LottieFor/>
   <Footer/>
   </>
  );
}
