import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaHandshake, FaPlusCircle } from "react-icons/fa";

const JoinOurCommunity = () => {
  return (
    <div className="bg-base-200 py-16 px-4 md:px-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-3">
          Join Our Community
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Connect with thousands of like-minded hobbyists around the country.
          Whether you're into music, painting, coding or gardening — Hobby Hub
          is your place to belong!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <motion.div
          className="card bg-white shadow-md p-6 rounded-xl border border-blue-100 hover:bg-blue-50 transition-all"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FaUsers className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-center mb-2 text-blue-700">
            Discover Hobby Groups
          </h3>
          <p className="text-center text-gray-600 text-sm">
            Browse through hundreds of public hobby groups and find your people.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="card bg-white shadow-md p-6 rounded-xl border border-blue-100 hover:bg-blue-50 transition-all"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaHandshake className="text-4xl text-green-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-center mb-2 text-green-700">
            Collaborate & Share
          </h3>
          <p className="text-center text-gray-600 text-sm">
            Collaborate with members and share ideas, artwork, or tips.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="card bg-white shadow-md p-6 rounded-xl border border-blue-100 hover:bg-blue-50 transition-all"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FaPlusCircle className="text-4xl text-purple-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-center mb-2 text-purple-700">
            Create Your Group
          </h3>
          <p className="text-center text-gray-600 text-sm">
            Can't find your hobby? Create your own group and invite others to join.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
