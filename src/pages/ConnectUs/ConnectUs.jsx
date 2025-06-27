
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import {
  fadeInDown,
  fadeInLeft,
  fadeInRight,
} from "react-animations";

// Animation wrappers
const FadeInDown = styled.div`animation: 1s ${keyframes`${fadeInDown}`} ease-out;`;
const FadeInLeft = styled.div`animation: 1s ${keyframes`${fadeInLeft}`} ease-out;`;
const FadeInRight = styled.div`animation: 1s ${keyframes`${fadeInRight}`} ease-out;`;

const ConnectUs = () => {
  return (
    <div className="bg-base-100 text-base-content py-10 px-4 md:px-20">
      <FadeInDown className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Connect With Us</h2>
        <p className="text-gray-500">
          Fill out the form below or reach us directly using the contact details.
        </p>
      </FadeInDown>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <FadeInLeft className="bg-base-200 p-8 rounded-2xl shadow-md">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
              required
            />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Write your message..."
              rows="4"
              required
            ></textarea>
            <button className="btn btn-primary w-full">Send Message</button>
          </form>
        </FadeInLeft>

        {/* Contact Info */}
        <FadeInRight className="flex flex-col justify-center space-y-6 text-lg">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-primary" />
            <span>contact@hobbyhub.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-primary" />
            <span>+880 1234-567890</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-primary" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </FadeInRight>
      </div>
    </div>
  );
};

export default ConnectUs;
