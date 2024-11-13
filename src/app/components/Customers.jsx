import React from "react";
import Image from "next/image";
import c1 from "../../../images/c1.png";
import c2 from "../../../images/c2.png";
import c3 from "../../../images/c3.png";
import c4 from "../../../images/c4.png";
import c5 from "../../../images/c5.png";
import c6 from "../../../images/c6.png";
import c7 from "../../../images/c7.png";


function Customers() {
  return (
    <div className="pt-40 absolute w-full mx-auto  karla_regular px-[32px] bg-[#fff] pb-[32px]">
      <div className="flex gap-3">
        <div>
          <h1>Case Studies</h1>
          <div className="flex flex-col gap-5">
          <div className="mt-10">
            <Image className="w-[100%] block" src={c1} alt="c1" />
          </div>

          <h2>DisneyNow</h2>
          <p>How DisneyNow crafts a dynamic app experiance</p>
          </div>
         
        </div>
        <div className="mt-[64px] flex flex-col gap-5">
        
          <div className="">
            <Image className="w-[100%] block" src={c6} alt="c2" />
          </div>
          <h2>Gojek</h2>
          <p>Warm and personal user experience at Gojek</p>
        </div>
        <div className="mt-[64px] flex flex-col gap-5">
          
          <div className="">
            <Image className="w-[100%] block" src={c7} alt="c3" />
          </div>
          <h2>Instacart</h2>
          <p>How instacacrt users motion to tell a story</p>
        </div>
        <div className="flex flex-col gap-5">
        
          <div className="mt-[64px]">
            <Image className="w-[100%] block" src={c2} alt="c4" />
          </div>
          <h2>DisneyNow</h2>
          <p>How DisneyNow crafts a dynamic app experiance</p>
        </div>
        <div>
          <h1>Oraganizations</h1>
          <div className="flex flex-col gap-5">
          <div className="mt-10">
            <Image className="w-[100%] block" src={c5} alt="c5" />
          </div>
          <h2>Enterprice</h2>
          <p>Your teams secure,scalable motion design platform to create, collaborate and implement animations</p>
          </div>
          
        </div>
        <div className="">
          <h1>Inspiration</h1>

          <div className="flex flex-col gap-5">
          <h2 className="mt-10">Use Cases</h2>
          <p>
            Discover and get inspired by the many use cases of motion design
          </p>

          <h1>Built with lottie</h1>
          <p>
            check out these websites,apps and more that were all built with
            lottie
          </p>

          <h1>Customer stories</h1>
          <p>
            Learn how our customers brought their designs to life with motion
          </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Customers;
