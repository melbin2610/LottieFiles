"use client"; // Make this a Client Component

import { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What platforms and frameworks are supported?",
      answer: "Our dotLottie Runtimes support web, Android, iOS, as well as popular frameworks such as React, Node.js, Vue.js, and more.",
    },
    {
      question: "How do I get started with dotLottie Runtimes?",
      answer: "Getting started is easy! Check out our quick start guide and interactive code snippets for various frameworks.",
    },
    {
      question: "What are the benefits of using dotLottie Runtimes over existing ones?",
      answer: "Our runtimes offer superior performance, reduced file sizes, feature parity across platforms, and enhanced interactivity.",
    },
    {
      question: "Are there any tutorials or documentation available?",
      answer: "Yes, visit our Developer portal for comprehensive tutorials, documentation, and resources.",
    },
    {
      question: "How does the dotLottie extension work compared to .json?",
      answer: "The dotLottie extension is fully compatible with .json, providing additional benefits such as reduced file sizes and bundled assets.",
    },
  ];

  return (
    <div className="bg-[#101417] p-6 xs:p-8 sm:p-10 md:p-12 lg:p-16 xl:p-24">
      <div className="w-full max-w-[1280px] mx-auto flex justify-between max-sra:flex-col items-center">
        <h1 className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[48px] text-[#ffff] font-bold text-center mb-8  arboria_bold">
          FAQs
        </h1>
        <div className="flex flex-col gap-4 w-[80%] max-sra:w-[100%] karla_regular">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                className="h-[70px] bg-[#192023] flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#2c353b]"
                onClick={() => handleToggle(index)}
              >
                <h2 className="text-white text-[16px] xs:text-[18px] sm:text-[20px] font-bold ">
                  {faq.question}
                </h2>
                <button className="text-white">
                  {openIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 12.79a.75.75 0 011.06 0L10 9.66l3.71 3.13a.75.75 0 111-1.14l-4.25-3.5a.75.75 0 01-1 0l-4.25 3.5a.75.75 0 010 1.14z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.34l3.71-3.13a.75.75 0 111 1.14l-4.25 3.5a.75.75 0 01-1 0l-4.25-3.5a.75.75 0 010-1.14z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
              {openIndex === index && (
                <h3 className="mt-2 p-4 text-[#d6fef1b3] bg-[#192023] rounded-xl text-[16px] max-md:text-[14px] ">
                  {faq.answer}
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
