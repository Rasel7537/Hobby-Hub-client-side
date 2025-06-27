import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const stories = [
  {
    name: "Jannat Akter",
    feedback:
      "Joining Hobby Hub helped me meet amazing people who love painting like I do. We now arrange monthly art meetups!",
    location: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/YR9mnn2/user1.png",
  },
  {
    name: "Samiul Haque",
    feedback:
      "Our book reading group became so popular! Hobby Hub made it possible to connect with fellow readers.",
    location: "Chattogram, Bangladesh",
    image: "https://i.ibb.co/yVxXT6x/user2.png",
  },
  {
    name: "Meherun Nesa",
    feedback:
      "Gardening was just a solo hobby. Now it’s a team effort thanks to my wonderful group on this platform!",
    location: "Sylhet, Bangladesh",
    image: "https://i.ibb.co/L8Vqjqh/user3.png",
  },
];

const SuccessStories = () => {
  return (
    <div className="py-16 px-4 md:px-16 bg-base-200">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-2">
          Success Stories
        </h2>
        <p className="text-gray-600 text-sm">
          See how Hobby Hub changed lives through creativity and community!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            className="card bg-white shadow-xl p-6 rounded-xl border border-blue-100 hover:bg-blue-50 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={story.image}
                alt={story.name}
                className="w-12 h-12 rounded-full border-2 border-blue-300"
              />
              <div>
                <h3 className="font-semibold text-lg text-blue-700">
                  {story.name}
                </h3>
                <p className="text-sm text-gray-500">{story.location}</p>
              </div>
            </div>
            <FaQuoteLeft className="text-3xl text-blue-300 mb-2" />
            <p className="text-gray-700 italic">"{story.feedback}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
