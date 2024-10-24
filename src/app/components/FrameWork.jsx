// Add this line at the very top of your component file
"use client";

import Image from "next/image";
import web from "../../../images/Web JS.svg";
import react from "../../../images/React.svg";
import vue from "../../../images/Vue JS.svg";
import svelte from "../../../images/Svelte.svg";
import ios from "../../../images/iOS.svg";
import android from "../../../images/Android.svg";
import { useState } from 'react';

const codeSnippets = {
  Web: `import { DotLottie } from '@lottiefiles/dotlottie-web';

const dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('#dotlottie-canvas'),
    src: "https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie",
});`,
  React: `import React, { useEffect } from 'react';
import { DotLottie } from '@lottiefiles/dotlottie-react';

const App = () => {
  useEffect(() => {
    const dotLottie = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: document.querySelector('#dotlottie-canvas'),
        src: "https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie",
    });
  }, []);
  
  return <div id="dotlottie-canvas" />;
};`,
  VueJS: `<template>
  <div id="dotlottie-canvas"></div>
</template>

<script>
import { DotLottie } from '@lottiefiles/dotlottie-vue';

export default {
  mounted() {
    new DotLottie({
      autoplay: true,
      loop: true,
      canvas: this.$refs['dotlottie-canvas'],
      src: "https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie",
    });
  },
};
</script>`,
  Svelte: `<script>
import { onMount } from 'svelte';
import { DotLottie } from '@lottiefiles/dotlottie-svelte';

onMount(() => {
  const dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('#dotlottie-canvas'),
    src: "https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie",
  });
});
</script>

<div id="dotlottie-canvas"></div>`,
  iOS: `import Lottie
import UIKit

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        let animationView = LottieAnimationView(name: "animation")
        animationView.loopMode = .loop
        animationView.play()
        view.addSubview(animationView)
    }
}`,
  Android: `import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.airbnb.lottie.LottieAnimationView;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        LottieAnimationView animationView = findViewById(R.id.animation_view);
        animationView.setAnimation("animation.json");
        animationView.loop(true);
        animationView.playAnimation();
    }
}`
};

const FrameWork = () => {
  const [selectedFramework, setSelectedFramework] = useState('Web');

  return (
    <div className="bg-[#101417] p-6 flex flex-col items-center">
      <div className='w-full max-w-[1280px] mx-auto'>
        <h1 className='text-center text-[32px] sm:text-[40px] md:text-[48px] text-[#ffff] font-bold'>Robust Framework Integrations</h1>
        <h2 className='text-center text-[16px] sm:text-[18px] md:text-[20px] text-[#5e706d] font-bold'>
          With our runtimes, integrating with various popular frameworks is effortless.
        </h2>
      </div>
      <div className="w-full max-w-[90%] h-[326px] border border-gray-500 rounded-[10px] mt-14 flex flex-col items-center max-sm:hidden">
        <div className='bg-[#20272c] w-full p-4'>
          <nav className="text-base text-[#ffff] flex justify-center gap-[20px] font-[16px]">
            {["Web", "React", "VueJS", "Svelte", "iOS", "Android"].map(framework => (
              <a
                key={framework}
                href="#"
                className="hover:text-green-500 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedFramework(framework);
                }}
              >
                {framework}
              </a>
            ))}
          </nav>
        </div>
        <div className="bg-[#20272c] w-[90%] h-[216px] rounded-xl mt-5 overflow-auto p-5">
          <pre className="p-4 text-xs">
            <code className="text-[#fff] text-[14px]">
              {codeSnippets[selectedFramework]}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex space-x-10 mt-10 flex-wrap justify-center">
        {[
          { src: web, alt: "Web JS", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-web/" },
          { src: react, alt: "React", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-react/" },
          { src: vue, alt: "Vue JS", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-vue/" },
          { src: svelte, alt: "Svelte", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-wc/" },
          { src: ios, alt: "iOS", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-ios/" },
          { src: android, alt: "Android", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-android/" }
        ].map(({ src, alt, href }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
            <Image src={src} alt={alt} className="max-w-[60px] sm:max-w-[80px] md:max-w-[100px]" />
          </a>
        ))}
      </div>

      <button 
  className="
    bg-[#019d91] 
    text-white 
    py-2 
    px-4 
    rounded-[16px] 
    mt-8 
    font-bold 
    text-[14px] 
    sl:py-3 sl:px-6 sl:text-[16px] 
    sz:py-4 sz:px-8 sz:text-[18px] 
    sm:py-5 sm:px-10 sm:text-[20px] 
    md:py-6 md:px-12 md:text-[22px] 
    srb:py-7 srb:px-14 srb:text-[22px] 
    sra:py-8 sra:px-15 sra:text-[24px] 
    xl:py-8 xl:px-16 xl:text-[26px]
  " 
  aria-label="Visit Developer Portal"
>
  Visit Developer Portal
</button>

    </div>
  );
}

export default FrameWork;
 