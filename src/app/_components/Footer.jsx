import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaDribbble, FaDiscord,FaGlobe, } from 'react-icons/fa';
import appstore from '../../../images/AppStore.png';
import googleplay from '../../../images/GooglePlay.png';
import mac from '../../../images/MacAppStore.png';

const socialLinks = [
  { href: '#', icon: <FaFacebook size={24} />, label: 'Facebook' },
  { href: '#', icon: <FaInstagram size={24} />, label: 'Instagram' },
  { href: '#', icon: <FaTwitter size={24} />, label: 'Twitter' },
  { href: '#', icon: <FaYoutube size={24} />, label: 'YouTube' },
  { href: '#', icon: <FaDribbble size={24} />, label: 'Dribbble' },
  { href: '#', icon: <FaDiscord size={24} />, label: 'Discord' },
];

const footerLinks = [
  { title: 'Products', items: ['Free Animations', 'Marketplace', 'LottieFiles Platform', 'Lottie Editor', 'Lottie Creator', 'LottieFiles Mobile App', 'Explore Animations'] },
  { title: 'Integrations & Tools', items: ['Adobe After Effects plugin', 'Figma plugin', 'Webflow plugin', 'Canva', 'Web Player', 'SVG to Lottie', 'Lottie to GIF', 'Lottie to dotLottie', 'JSON Editor', 'Optimize Lottie', 'Open Source Libraries'] },
  { title: 'Customers', items: ['Customer Stories', 'Use Cases', 'Case Studies', 'Built with Lottie', 'Why Motion?'] },
  { title: 'Resources', items: ['Education', 'Blog', 'What is Lottie', 'Forum', 'FAQ & Support', 'Lottie Lab', 'Community', 'Developer Portal', 'Interactivity Guide', 'LottieDocs', 'Supported Features', 'dotLottie Runtimes', 'AI features'] },
  { title: 'Terms and Policies', items: ['Privacy Policy', 'Security', 'Terms and Conditions', 'Terms of Sale', 'Community Guidelines', 'Upload Guidelines'] },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 text-sm karla_regular">
      <div className="max-w-screen-xl mx-auto px-4 py-24 md:px-6  text-[16px]">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 ">
          {footerLinks.map(({ title, items }, idx) => (
            <div className="flex flex-col" key={title}>
              <h3 className="font-semibold mb-2">{title}</h3>
              <ul className="space-y-2 flex-grow">
                {items.map((item, index) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-green-500" aria-label={item}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col">
            <h3 className="font-semibold mb-2">Get LottieFiles for mobile and desktop</h3>
            <ul className="space-y-2 flex-grow">
              {[{ src: appstore, alt: 'Download on the App Store' }, { src: googleplay, alt: 'Get it on Google Play' }, { src: mac, alt: 'Download on the Mac App Store' }].map(({ src, alt }) => (
                <li key={alt}>
                  <Link href="#">
                    <Image className="w-32" src={src} alt={alt} />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#" className="hover:text-green-500">
                  LottieFiles for Apple Vision Pro
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-8">
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon, label }, index) => (
                <Link key={label} href={href} className="flex items-center space-x-2 hover:text-green-500" aria-label={label}>
                  {icon}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4 p-8 max-sra:flex-wrap">
              <span className=" flex items-center" aria-label="Region">
                <FaGlobe className="mr-2 text-[#131212cc]" />
                Region:
              </span>
              {['International', 'Español', 'Português', '한국어', '日本', 'Français', 'Deutsch'].map((lang) => (
                <Link key={lang} href="#" className="hover:text-green-500">{lang}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between max-sra:flex-col'>
            <div className='flex flex-col max-sra:gap-3 max-sra:text-center'>
            <h4>LottieFiles is by Design Barn Inc.</h4>
            <h4>Copyright © 2024 Design Barn Inc. All rights reserved.</h4>
            </div>
            <h5 className="flex items-center max-sra:mt-3">
  Made with love ❤️ from Turkey
</h5>

            <div className="flex items-center space-x-4 p-8 max-sz:text-[16px]">
              {['Feedback', 'Press', 'Team', 'Careers',].map((lang) => (
                <Link key={lang} href="#" className="hover:text-green-500">{lang}</Link>
              ))}
            </div>

          
        </div>
      </div>
    </footer>
  );
}
