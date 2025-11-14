import { section } from "framer-motion/client";
import React, { useState } from "react";

const faqs = [
  {
    question: "How often should I water my indoor plants?",
    answer:  "Most indoor plants prefer to be watered when the top inch of soil feels dry. Over-watering can harm the roots, so check the soil regularly.",
  },
  {
    question: "Which plants are best for low-light rooms?",
    answer:  "Plants like Snake Plant, ZZ Plant, and Pothos thrive in low-light conditions and are perfect for rooms without direct sunlight.",
  },
  {
    question:"How can I prevent pests on my plants?",
    answer:  "Keep your plants clean by wiping leaves with a damp cloth, avoid overwatering, and inspect plants regularly. Neem oil or insecticidal soap can help control pests naturally.",
  },
  {
    question: "Do my plants need fertilizer?",
    answer: "Yes, plants benefit from fertilization during their growing season. Use a balanced liquid fertilizer every 4-6 weeks for healthy growth.",
  },
  {
  question: "How do I know if my plant is getting enough sunlight?",
  answer:
    "Observe the plant’s growth and leaf color. If leaves are pale or the plant is stretching towards the light, it may need more sunlight. Place plants near bright, indirect light for optimal growth."
}

];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
   <section className="bg-linear-to-r from-black to-green-950">
     <div className="max-w-2xl mx-auto py-30 p-4">
      <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#141414] text-white rounded-xl shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center bg-green-700 transition-all rounded-xl"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 border-t border-gray-700 text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
   </section>
  );
}
