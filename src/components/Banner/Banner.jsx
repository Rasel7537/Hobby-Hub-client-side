// import React from "react";

// const Banner = () => {
//   return (
//     <div>
//       <div>
//         <div className="carousel w-full">
//           <div id="slide1" className="carousel-item relative w-full">
//             <img
            
//               src="https://i.ibb.co/Zp2F69fh/hobby-1.png"
//               className="w-full h-80"
//             />
//             <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//               <a href="#slide4" className="btn btn-circle">
//                 ❮
//               </a>
//               <a href="#slide2" className="btn btn-circle">
//                 ❯
//               </a>
//             </div>
//           </div>
//           <div id="slide2" className="carousel-item relative w-full">
//             <img
//               src="https://i.ibb.co/ns1VV8xn/hobby-2.png"
//               className="w-full h-80"
//             />
//             <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//               <a href="#slide1" className="btn btn-circle">
//                 ❮
//               </a>
//               <a href="#slide3" className="btn btn-circle">
//                 ❯
//               </a>
//             </div>
//           </div>
//           <div id="slide3" className="carousel-item relative w-full">
//             <img
//               src="https://i.ibb.co/XQ592MX/hobby-3.png"
//               className="w-full h-80 "
//             />
//             <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//               <a href="#slide2" className="btn btn-circle">
//                 ❮
//               </a>
//               <a href="#slide4" className="btn btn-circle">
//                 ❯
//               </a>
//             </div>
//           </div>
//           <div id="slide4" className="carousel-item relative w-full">
//             <img
//               src="https://i.ibb.co/7tgyZhJg/hobby-4.png"
//               className="w-full h-80 "
//             />
//             <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//               <a href="#slide3" className="btn btn-circle">
//                 ❮
//               </a>
//               <a href="#slide1" className="btn btn-circle">
//                 ❯
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;


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
