
import React from "react";
import heroImage from "../../assets/image2.png";
import heroImageTwo from "../../assets/heroImage-2.png";
import { Typewriter } from "react-simple-typewriter";

const ExtraBanner = () => {
  return (
    <div>
      {/* Part One */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={heroImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-blue-600">
              <Typewriter
                words={["Where Passion Meets Community", "Join. Create. Inspire."]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="py-6">
              Explore local hobby groups and unlock endless creative
              opportunities. Connect with passionate enthusiasts who share your
              interests. Celebrate every unique passion and build lasting
              community bonds.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* Part Two */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={heroImageTwo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-blue-600">
              <Typewriter
                words={["Where Every Passion Finds Its People", "Hobby. Community. Joy."]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="py-6">
              Explore vibrant local hobby groups where creativity comes to life.
              Connect with passionate enthusiasts who share your interests.
              Transform your hobbies into lasting community experiences.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraBanner;

