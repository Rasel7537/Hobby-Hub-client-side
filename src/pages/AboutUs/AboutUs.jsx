import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";
import { FaUsers, FaStar, FaHeart } from "react-icons/fa";

// Animation wrapper
const FadeInUp = styled.div`
  animation: 1s ${keyframes`${fadeInUp}`} ease-out;
`;

const AboutUs = () => {
  return (
    <FadeInUp className="bg-base-100 text-base-content py-12 px-4 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-3">About Hobby Hub</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Hobby Hub is a platform that connects people with similar hobbies and interests.
          Whether you're into painting, coding, gardening, or gaming — this is your place to grow and connect.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-10 text-center">
        <div className="p-6 rounded-2xl shadow-md bg-base-200 hover:shadow-xl transition duration-300">
          <FaUsers className="text-3xl text-primary mb-3 mx-auto" />
          <h3 className="text-xl font-semibold mb-1">Community Driven</h3>
          <p>We believe in the power of shared passion and learning together.</p>
        </div>

        <div className="p-6 rounded-2xl shadow-md bg-base-200 hover:shadow-xl transition duration-300">
          <FaStar className="text-3xl text-primary mb-3 mx-auto" />
          <h3 className="text-xl font-semibold mb-1">Skill Focused</h3>
          <p>Our platform helps you improve your hobbies through real activities.</p>
        </div>

        <div className="p-6 rounded-2xl shadow-md bg-base-200 hover:shadow-xl transition duration-300">
          <FaHeart className="text-3xl text-primary mb-3 mx-auto" />
          <h3 className="text-xl font-semibold mb-1">Passion Powered</h3>
          <p>Everything we do is driven by passion and creativity.</p>
        </div>
      </div>
    </FadeInUp>
  );
};

export default AboutUs;
