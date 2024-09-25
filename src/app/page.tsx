import Image from "next/image";
import Header from "./components/Header"
import Spotlight from "./components/Spotlight"
import Experience from "./components/Experience"
import FrameWork from "./components/FrameWork"
import Advantages from "./components/Advantages"
import Canva from "./components/Canva"
import Faq from "./components/Faq"

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
   </>
  );
}
