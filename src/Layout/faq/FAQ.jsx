import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react'; // optional icons

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer services like wedding planning, birthday parties, baby showers, anniversaries, and more.",
  },
  {
    question: "How can I contact you for booking an event?",
    answer:
      "You can contact us via our website form or call our hotline. We’re always ready to help!",
  },
  {
    question: "What are the key factors for a successful event?",
    answer:
      "Key factors include budget, venue, food, entertainment, and guest experience. We handle it all.",
  },
  {
    question: "Do you offer customized event packages?",
    answer:
      "Yes! We tailor packages to your needs so you can enjoy a unique event experience.",
  },
  {
    question: "Can you help with decorations and themes?",
    answer:
      "Absolutely! Our decorators and designers bring your vision to life with themed styling.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition"
      >
        <span className="text-lg font-medium text-gray-800">{faq.question}</span>
        {isOpen ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 py-4 text-md text-gray-600"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
