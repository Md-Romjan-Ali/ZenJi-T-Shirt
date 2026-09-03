"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      category: "ORDERS & SHIPPING",
      questions: [
        {
          q: "Do you ship Australia-wide?",
          a: "Yes! We ship to every Australian state and territory, including Sydney, Melbourne, Brisbane, Perth, and Adelaide. Standard delivery takes 5–10 business days, with free shipping on orders over A$100.",
        },
        {
          q: "Do you ship internationally?",
          a: "Currently, ZENJI primarily ships Australia-wide. International shipping options will be introduced in upcoming drops.",
        },
        {
          q: "Can I change or cancel my order?",
          a: "Because drops are processed rapidly, changes or cancellations must be requested within 2 hours of placing your order by contacting support.",
        },
        {
          q: "How do I track my order?",
          a: "Once your package is dispatched, you will receive a tracking link via email to trace your shipment in real-time.",
        },
      ],
    },
    {
      category: "STOCK & DROPS",
      questions: [
        {
          q: "When does my order ship?",
          a: "Orders from the Origin Drop are in stock and ship within 1–2 business days from our Australian facility.",
        },
        {
          q: "Will sold-out items be restocked?",
          a: "No. All ZENJI releases are limited-edition drops. Once a piece sells out, it is gone forever—there are no restocks, ever.",
        },
      ],
    },
  ];

  const toggleAccordion = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <section className="w-full bg-white dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 py-20 px-6 sm:px-10 lg:px-16 transition-colors duration-300 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Top Header Matching Image Layout */}
        <div className="space-y-3 pb-6 border-b border-red-600 dark:border-red-600">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight italic text-neutral-950 dark:text-white">
            FAQ
          </h2>
          <p className="text-xs font-mono font-bold tracking-[0.25em] text-red-600 dark:text-red-500 uppercase">
            EVERYTHING YOU NEED TO KNOW
          </p>
        </div>

        {/* Categories & Questions List */}
        <div className="space-y-12">
          {faqData.map((section, catIdx) => (
            <div key={catIdx} className="space-y-6">
              
              {/* Category Header with Red Left Accent Line */}
              <div className="flex items-center gap-3">
                <span className="w-1 h-5 bg-red-600 dark:bg-red-500 rounded-full" />
                <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider font-mono text-neutral-950 dark:text-white">
                  {section.category}
                </h3>
              </div>

              {/* Accordion List */}
              <div className="divide-y divide-neutral-200 dark:divide-neutral-800/80 border-t border-b border-neutral-200 dark:border-neutral-800/80">
                {section.questions.map((item, qIdx) => {
                  const key = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === key;

                  return (
                    <div key={qIdx} className="py-4">
                      <button
                        onClick={() => toggleAccordion(catIdx, qIdx)}
                        className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                      >
                        <span className="text-sm sm:text-base font-semibold font-mono text-neutral-800 dark:text-neutral-200 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                          {item.q}
                        </span>

                        {/* Plus / Minus Accent Icon */}
                        <div className="text-red-600 dark:text-red-500 flex-shrink-0 p-1">
                          {isOpen ? (
                            <FiMinus className="w-4 h-4 transition-transform duration-200" />
                          ) : (
                            <FiPlus className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                          )}
                        </div>
                      </button>

                      {/* Expandable Answer */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed max-w-2xl">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}