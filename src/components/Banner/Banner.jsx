
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import caro1 from "../../assets/caro-1.jpg"
import caro2 from "../../assets/caro-2.jpg"
import caro3 from "../../assets/caro-3.jpg"
import caro4 from "../../assets/caro-4.jpg"
const Banner = () => {
  return (
    <div className="max-h-[70vh] overflow-hidden rounded-xl shadow-md">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={700}
        stopOnHover={false}
        swipeable={true}
      >
        {/* Slide 1 */}
        <div>
          <img
            src={caro1}
            alt="Slide 1"
            className="w-full h-[70vh] object-cover"
          />
        </div>

        {/* Slide 2 */}
        <div>
          <img
            src={caro2}
            alt="Slide 2"
            className="w-full h-[70vh] object-cover"
          />
        </div>

        {/* Slide 3 */}
        <div>
          <img
            src={caro3}
            alt="Slide 3"
            className="w-full h-[70vh] object-cover"
          />
        </div>

        {/* Slide 4 */}
        <div>
          <img
            src={caro4}
            alt="Slide 4"
            className="w-full h-[70vh] object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
