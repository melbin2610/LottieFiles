"use client"; // Make this a Client Component

import { useState } from 'react';

const Faq = () => {
  // State for managing the open/close status for multiple boxes
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the open/close status of a box
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
      answer: "Our runtimes offer superior performance, reduced file sizes, feature parity across platforms, and enhanced interactivity, making them a powerful tool for developers and designers alike.",
    },
    {
      question: "Are there any tutorials or documentation available?",
      answer: "Yes, visit our Developer portal for comprehensive tutorials, documentation, and resources.",
    },
    {
        question: "How does the dotLottie extension work compared to .json?",
        answer: "The dotLottie extension is fully compatible with .json, providing additional benefits such as reduced file sizes and bundled assets for easier management.",
      }
  ];

  return (
    <div className="bg-[#101417] p-12">
      <div className="w-[90%] max-w-[1280px] mx-auto flex">
        <div className="flex-grow">
          <h1 className="text-[48px] text-[#ffff] font-bold">FAQs</h1>
        </div>
        <div className="flex flex-col gap-4 w-[828px]">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                className="h-[70px] bg-[#192023] flex items-center justify-between p-4 rounded-xl cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h2 className="text-white text-[20px] font-bold">
                  {faq.question}
                </h2>
                <button className="text-white">
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 12.79a.75.75 0 011.06 0L10 9.66l3.71 3.13a.75.75 0 111-1.14l-4.25-3.5a.75.75 0 01-1 0l-4.25 3.5a.75.75 0 010 1.14z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06 0L10 10.34l3.71-3.13a.75.75 0 111 1.14l-4.25 3.5a.75.75 0 01-1 0l-4.25-3.5a.75.75 0 010-1.14z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {openIndex === index && (
                <h3 className="mt-2 p-4 text-white bg-[#192023] rounded-xl">
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
