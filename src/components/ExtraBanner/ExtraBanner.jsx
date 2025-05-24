import React from "react";
import heroImage from "../../assets/image2.png";
import heroImageTwo from "../../assets/image.png";

const ExtraBanner = () => {
  return (
    <div>
      {/* part one  */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={heroImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Where Passion Meets Community
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
      {/* part two */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={heroImageTwo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Where Every Passion Finds Its People
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
