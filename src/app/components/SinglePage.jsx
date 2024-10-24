import React from 'react';
import Image from 'next/image';
import spOne from '../../../images/sp-1.png';
import spTwo from '../../../images/spTwo.jpeg'
import spThree from '../../../images/spThree.png'
import spFour from '../../../images/spFour.png'
import logo from '../../../images/lottie-logo.png';
import { useParams } from 'next/navigation';
const SinglePage = () => {
  const { slug } = useParams();

  // Decode the slug
  const decodedSlug = decodeURIComponent(slug);

  // Mock resource data
  const resources = [
    {
      id: 1,
      slug: "Introducing-dotLottie:-An-Open-Source-File-Format",
      image: spOne,
      title: "Introducing dotLottie: An Open-Source File Format",
      readTime: "4 min read",
    },
    {
      id: 2,
      slug: "Development-Update-Of-The-dotLottie-Format",
      image: spTwo,
      title: "Development Update Of The dotLottie Format",
      readTime: "2 min read",
    },
    {
      id: 3,
      slug: "ThorVG-powerful-graphics-library-for-Lottie-Animation",
      image: spThree,
      title: "ThorVG: Powerful Graphics Library for Lottie Animation",
      readTime: "4 min read",
    },
    {
      id: 4,
      slug: "Getting-Started-with-dotLottie-player-for-ios",
      image: spFour,
      title: "Getting Started with dotLottie Player for iOS",
      readTime: "4 min read",
    },
  ];


  // Find the page data based on the decoded slug
  const pageData = resources.find((resource) => resource.slug === decodedSlug);
  console.log(pageData);

  // Handle case when pageData is not found
  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <div className='p-4 xs:p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 2xl:p-32'>
      <div className='w-[90%] max-w-[1280px] mx-auto'>
        <div className='flex flex-col xs:flex-row sm:flex-row gap-2 xs:gap-2 sm:gap-4 mt-36'>
          <a href='/blog' className='flex items-center text-xs xs:text-sm sm:text-base'>
            blog <span className='ml-1'>{'>'}</span>
          </a>
          <a href='/working-with-lottie-animations' className='flex items-center text-xs xs:text-sm sm:text-base'>
            Working with Lottie Animations <span className='ml-1'>{'>'}</span>
          </a>
          <a href={`/${pageData.slug}`} className='flex items-center text-xs xs:text-sm sm:text-base'>
            {pageData.title} <span className='ml-1'>{'>'}</span>
          </a>
        </div>
        <h1 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-5'>
          {pageData.title}
        </h1>
        <div className='mt-4'>
          <div className='flex text-[14px] xs:text-[12px] sm:text-[16px] flex-col xs:flex-row sm:flex-row items-center gap-1 xs:gap-2 sm:gap-4 text-gray-600'>
            <Image className='block w-6 h-6 rounded-3xl xs:w-8 xs:h-8 sm:w-10 sm:h-10' src={logo} alt='Logo' />
            <a href='/blog' className='flex items-center'>
              LottieFiles
            </a>
            <span className='font-bold'>.</span>
            <span className='flex items-center'>{new Date().toLocaleDateString()}</span>
            <span className='font-bold'>.</span>
            <span className='flex items-center'>{pageData.readTime}</span>
          </div>
          <Image className='block w-full h-auto mt-16 rounded-3xl' src={pageData.image} alt='Experience Image' />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
