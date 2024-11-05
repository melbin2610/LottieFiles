// Add "use client" at the very top to mark this file as a Client Component
"use client";

import Image from "next/image";
import { useState } from "react";
import web from "../../../images/Web JS.svg";
import react from "../../../images/React.svg";
import vue from "../../../images/Vue JS.svg";
import svelte from "../../../images/Svelte.svg";
import ios from "../../../images/iOS.svg";
import android from "../../../images/Android.svg";
import html from "../../../images/Basic HTML.svg";

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
  const [selectedFramework, setSelectedFramework] = useState("Web");

  // Function to apply color to code snippets
  const getSnippetColor = (wordIndex) => {
    const colors = ['text-red-800', 'text-green-800', 'text-white', 'text-blue-800'];
    return colors[wordIndex % colors.length];
  };

  // Function to render the code snippet with color
  const renderCodeSnippet = (snippet) => {
    return snippet.split("\n").map((line, lineIndex) => (
      <div key={lineIndex} className="flex">
        {line.split(/\s+/).map((word, wordIndex) => (
          <span key={wordIndex} className={getSnippetColor(wordIndex)}>
            {word}{" "}
          </span>
        ))}
      </div>
    ));
  };

  return (
    <div className="bg-[#101417] p-6 flex flex-col items-center">
      <div className="w-full max-w-[1280px] mx-auto">
        <h1 className="text-center text-[32px] sm:text-[40px] md:text-[48px] text-[#ffff] arboria_bold font-bold">
          Robust Framework Integrations
        </h1>
        <h2 className="text-center text-[16px] sm:text-[18px] md:text-[20px] text-[#5e706d] font-bold karla_regular">
          With our runtimes, integrating with various popular frameworks is effortless.
        </h2>
      </div>

      <div className="w-full max-w-[90%] h-[326px] border border-gray-500 rounded-[10px] mt-14 flex flex-col items-center max-sm:hidden">
        <div className="bg-[#20272c] w-full p-1">
          <nav className="text-base text-[#ffff] flex justify-center gap-[20px] font-[16px] karla_regular ">
            {["Web", "React", "VueJS", "Svelte", "iOS", "Android"].map((framework) => (
              <a
                key={framework}
                href="#"
                className={`${
                  selectedFramework === framework ? "text-green-500 border-b border-green-500 text-[20px]" : ""
                } transition-all duration-200`}
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

        <div className="bg-[#20272c] w-[90%] h-[216px] rounded-xl mt-5 overflow-auto p-5 karla_regular">
          <pre className="p-4 text-xs">
            <code className="text-[14px]">
              {renderCodeSnippet(codeSnippets[selectedFramework])}
            </code>
          </pre>
        </div>
      </div>

      <div className="flex gap-10 space-x-11 mt-10 justify-center karla_regular sl:space-x-3 zr:space-x-2 max-zr:flex-wrap max-sm:gap-0">
        {[
          { src: web, alt: "Web JS", name: "Web", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-web/" },
          { src: react, alt: "React", name: "React", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-react/" },
          { src: vue, alt: "Vue JS", name: "Vue", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-vue/" },
          { src: html, alt: "HTML", name: "HTML", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-wc/" },
          { src: svelte, alt: "Svelte", name: "Svelte", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-wc/" },
          { src: ios, alt: "iOS", name: "iOS", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-ios/" },
          { src: android, alt: "Android", name: "Android", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-android/" }
        ].map(({ src, alt, name, href }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer" aria-label={alt} className="text-center">
            <div className="w-[48px] h-[48px] zr:max-w-[28px] sl:max-w-[33px] md:max-w-[80px] lg:max-w-[90px] xl:max-w-[100px] grayscale hover:grayscale-0 transition-all duration-300">
              <Image src={src} alt={alt} />
            </div>
            <p className="mt-2 text-sm text-gray-600 max-md:hidden">{name}</p>
          </a>
        ))}
      </div>

      <button
        className="bg-[#019d91] text-white py-2 px-4 rounded-[16px] mt-8 font-bold text-[14px] sl:py-3 sl:px-6 sl:text-[16px] sz:py-4 sz:px-8 sz:text-[13px] sm:py-5 sm:px-10 sm:text-[14px] md:py-6 md:text-[15px] srb:text-[16px] sra:text-[18px] xl:py-4 xl:px-12 xl:text-[20px] karla_regular"
        aria-label="Visit Developer Portal"
      >
        Visit Developer Portal
      </button>
    </div>
  );
};

export default FrameWork;
