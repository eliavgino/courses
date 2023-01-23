// import React from "react";
// import { useEffect, useContext, useState } from "react";
// import { SubjectContext } from "./../context/subject";

// const CarouselCourses = () => {
//   //   const { getAllSubjects, coursesType } = useContext(SubjectContext);

//   //   useEffect(() => {
//   //     getAllSubjects();
//   //   }, []);
//   return (
//     <div>
//       <div
//         id="carouselExampleIndicators"
//         className="carousel slide"
//         data-ride="carousel"
//         style={{ background: "black" }}
//       >
//         <ol className="carousel-indicators">
//           <li
//             data-target="#carouselExampleIndicators"
//             data-slide-to="0"
//             className="active"
//           ></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//         </ol>
//         <div className="carousel-inner">
//           <div className="carousel-item" style={{ background: "black" }}>
//             <img
//               src="https://miro.medium.com/max/1400/1*m0H6-tUbW6grMlezlb52yw.png"
//               alt="..."
//             />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>yes</h5>
//               <p>no</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src="..." alt="..." />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>yes</h5>
//               <p>no</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src="" alt="..." />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>yes</h5>
//               <p>no</p>
//             </div>
//           </div>
//         </div>
//         <a
//           className="carousel-control-prev"
//           href="#carouselExampleIndicators"
//           role="button"
//           data-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a
//           className="carousel-control-next"
//           href="#carouselExampleIndicators"
//           role="button"
//           data-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CarouselCourses;
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

const spanStyle = {
  padding: "5%",
  background: "#f8f9fac4",
  color: "#000000",
  margin: "10%",
  justifyContent: "center",
  backgroundSize: "contain",
};

const divStyle = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "contain",
  height: "100%",
  with: "100%",
};
const slideImages = [
  {
    url: "https://www.softlogicsys.in/wp-content/uploads/2019/05/mongodp-training-in-chennai.png",
    caption:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL) which is deemed non-free by several distributions.",
  },
  {
    url: "https://s3-ap-southeast-1.amazonaws.com/upcode/courses/featured_images/000/000/010/fb_catalog/Course_Image_Python_Development.png?1626945648",
    caption:
      "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation, Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a batteries included language due to its comprehensive standard library",
  },
  {
    url: "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/278114i5C41CD1A3CAA3438",
    caption:
      "Structured Query Language, abbreviated as SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables.",
  },
  {
    url: "https://www.tabnine.com/blog/wp-content/uploads/2020/11/blog-4-1.png",
    caption:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.",
  },
  {
    url: "https://highskyit.com/wp-content/uploads/2019/07/dockers_banner-1.jpg",
    caption:
      "Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first started in 2013 and is developed by Docker, Docker is a tool that is used to automate the deployment of application in lightweight containers so that application can work efficiently in different environments.",
  },
  {
    url: "https://www.clariwell.in/resources/best-java-certification-course-top-training-institute-in-pune.webp",
    caption:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile. ",
  },
  {
    url: "https://miro.medium.com/max/1100/0*fcnL6h72kX6skH7H.jpeg",
    caption:
      "JavaScript , often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. ",
  },
];

const CarouselCourses = () => {
  return (
    <div className="slide-container">
      {/* <Slide> */}
      <Fade>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              <span style={spanStyle}>{slideImage.caption} </span>
              <button
                style={{ marginBottom: "5%" }}
                className="btn btn-light"
                href="http://localhost:3000/add"
              >
                see more
              </button>
            </div>
          </div>
        ))}
      </Fade>
      {/* </Slide> */}
    </div>
  );
};
export default CarouselCourses;
