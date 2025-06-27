import React from "react";
import heroImage from "../../assets/image2.jpg";
import heroImageTwo from "../../assets/heroImage-2.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const ExtraBanner = () => {
  return (
    <div>
      {/* Part One */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            src={heroImage}
            className="w-full max-w-md lg:max-w-xl rounded-lg shadow-2xl"
            alt="Hero 1"
          />

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
              <Typewriter
                words={[
                  "Where Passion Meets Community",
                  "Join. Create. Inspire.",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="py-6 text-gray-600">
              Discover local hobby groups tailored to your interests and spark
              creativity through community. Celebrate every unique passion and
              build lasting connections.
            </p>
            <button className="btn btn-primary hover:scale-105 transition duration-300 bg-blue-500 border-0">
              Get Started 🚀
            </button>
          </motion.div>
        </div>
      </div>

      {/* Part Two */}
      <div className="hero bg-base-100 py-16">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            src={heroImageTwo}
            className="w-full max-w-md lg:max-w-xl rounded-lg shadow-2xl"
            alt="Hero 2"
          />

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text">
              <Typewriter
                words={[
                  "Where Every Passion Finds Its People",
                  "Hobby. Community. Joy.",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="py-6 text-gray-600">
              Explore vibrant local hobby groups where creativity comes to life.
              Connect with passionate enthusiasts and transform hobbies into
              meaningful experiences.
            </p>
            <button className="btn btn-primary hover:scale-105 transition duration-300 bg-blue-500 border-0">
              Explore Now 🎨
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExtraBanner;
