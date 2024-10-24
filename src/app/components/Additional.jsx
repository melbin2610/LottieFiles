import Image from "next/image";
import one from "../../../images/one.webp";
import two from "../../../images/two.png";
import three from "../../../images/three.png";
import four from "../../../images/four.png";
import Link from "next/link";

const resources = [
  {
    id:1,
    slug : "Introducing-dotLottie:-An-Open-Source-File-Format",
    image: one,
    title: "Introducing dotLottie: An Open-Source File Format",
    readTime: "4 min read",
  },
  {
    id:2,
    slug : "Development-Update-Of-The-dotLottie-Format",
    image: two,
    title: "Development Update Of The dotLottie Format",
    readTime: "2 min read",
  },
  {
    id:3,
    slug : "ThorVG-powerful-graphics-library-for-Lottie-Animation",
    image: three,
    title: "ThorVG: Powerful Graphics Library for Lottie Animation",
    readTime: "4 min read",
  },
  {
    id:4,
    image: four,
    slug : "Getting-Started-with-dotLottie-player-for-ios",
    title: "Getting Started with dotLottie Player for iOS",
    readTime: "4 min read",
  },
];

const ResourceCard = ({ image, title, readTime,id,  slug }) => (
  <Link href={`/${slug}`} className='w-[270px] h-[260px] bg-[#101417] mt-6'>
    <Image className="w-[100%] h-[135px] rounded-xl" src={image} alt={title} />
    <h2 className="text-[20px] text-[#ffff] font-bold mt-3  max-xl:text-[16px]">{title}</h2>
    <p className="text-[16px] text-[#5e706d] mt-3">{readTime}</p>
  </Link>
);

const Additional = () => {
  return (
    <div className='bg-[#101417] p-12'>
      <div className='w-[90%] max-w-[1280px] mx-auto'>
        <h1 className='text-[36px] text-[#ffff] font-bold max-sm:text-center max-xl:text-[16px]'>Additional resources</h1>
        <div className='flex justify-between flex-wrap max-sm:justify-center'>
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Additional;
