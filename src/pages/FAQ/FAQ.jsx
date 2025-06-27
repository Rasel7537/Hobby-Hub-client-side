import React from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    question: "What is Hobby Hub?",
    answer:
      "Hobby Hub is a platform where you can join or create hobby groups, meet like-minded people, and share your passion.",
  },
  {
    question: "Is it free to join a group?",
    answer:
      "Yes! Joining and participating in most groups is completely free unless specified by the group owner.",
  },
  {
    question: "Can I create my own hobby group?",
    answer:
      "Absolutely! You can easily create a group and invite others who share your interests.",
  },
  {
    question: "Do I need an account to use Hobby Hub?",
    answer:
      "Yes, you'll need to sign up to join or create groups, but browsing is open to everyone.",
  },
];

const FAQ = () => {
  return (
    <motion.div
      className="bg-base-100 px-4 md:px-20 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-10">
        <FaQuestionCircle className="text-4xl text-blue-600 mx-auto mb-2" />
        <h2 className="text-3xl font-bold text-blue-600">Frequently Asked Questions</h2>
        <p className="text-gray-500 mt-2 text-sm max-w-2xl mx-auto">
          Got questions? We’ve got answers. Here’s everything you need to know about Hobby Hub.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="collapse collapse-arrow bg-base-200 rounded-box shadow-md">
              <input type="checkbox" />
              <div className="collapse-title text-md font-medium text-blue-700">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-700 text-sm">
                <p>{faq.answer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
