import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import "./Quynh.css";
import { useNavigate } from "react-router-dom";

const img = [
  "../../../public/q1.jpg",
  "../../../public/q2.jpg",
  "../../../public/q3.jpg",
  "../../../public/q4.jpg",
  "../../../public/v.jpg",
];

export default function Quynh() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [allImagesDisplayed, setAllImagesDisplayed] = useState(false);

  const handleClick = () => {
    if (allImagesDisplayed) {
      alert("Bye Bye bé iu");
      navigate("/heart");
      return;
    }

    // Randomly select an image from the img array that hasn't been displayed yet
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * img.length);
    } while (displayedImages.includes(randomIndex));

    const selectedImgSrc = img[randomIndex];

    // Generate random position
    let x, y;
    do {
      x = Math.random() * window.innerWidth;
      y = Math.random() * window.innerHeight;
    } while (
      // Ensure the image position does not overlap the button
      x > window.innerWidth / 2 - 100 && // Adjust 100 for the button's width
      x < window.innerWidth / 2 + 100 && // Adjust 100 for the button's width
      y > window.innerHeight / 2 - 50 && // Adjust 50 for the button's height
      y < window.innerHeight / 2 + 50 // Adjust 50 for the button's height
    );

    // Add the new image to the state
    setImages([...images, { src: selectedImgSrc, x, y }]);
    setDisplayedImages([...displayedImages, randomIndex]);
  };

  useEffect(() => {
    if (displayedImages.length === img.length) {
      setAllImagesDisplayed(true);
    }
  }, [displayedImages]);

  return (
    <>
      <Box>
        <Button
          onClick={handleClick}
          style={{ position: "relative", zIndex: 1 }}
        >
          Click here
        </Button>
      </Box>
      {/* Render images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Image ${index}`}
          style={{
            position: "absolute",
            left: image.x + "px",
            top: image.y + "px",
            width: "100px",
            height: "auto",
          }}
        />
      ))}
    </>
  );
}

// Hiển thị rất nhiều
// import React, { useState } from "react";
// import { Box, Button } from "@mui/material";
// import "./Quynh.css";

// const img = [
//   "../../../public/q1.jpg",
//   "../../../public/q2.jpg",
//   "../../../public/q3.jpg",
//   "../../../public/q4.jpg",
//   "../../../public/v.jpg",
//   "../../../public/v1.jpg",
// ];

// export default function Quynh() {
//   const [images, setImages] = useState([]);

//   const handleClick = () => {
//     // Randomly select an image from the img array
//     const randomIndex = Math.floor(Math.random() * img.length);
//     const selectedImgSrc = img[randomIndex];

//     // Generate random position
//     let x, y;
//     do {
//       x = Math.random() * window.innerWidth;
//       y = Math.random() * window.innerHeight;
//     } while (
//       // Ensure the image position does not overlap the button
//       x > window.innerWidth / 2 - 100 && // Adjust 100 for the button's width
//       x < window.innerWidth / 2 + 100 && // Adjust 100 for the button's width
//       y > window.innerHeight / 2 - 50 && // Adjust 50 for the button's height
//       y < window.innerHeight / 2 + 50 // Adjust 50 for the button's height
//     );

//     // Add the new image to the state
//     setImages([...images, { src: selectedImgSrc, x, y }]);
//   };

//   return (
//     <>
//       <Box>
//         <Button
//           onClick={handleClick}
//           style={{ position: "relative", zIndex: 1 }}
//         >
//           Click here
//         </Button>
//       </Box>
//       {/* Render images */}
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image.src}
//           alt={`Image ${index}`}
//           style={{
//             position: "absolute",
//             left: image.x + "px",
//             top: image.y + "px",
//             width: "100px",
//             height: "auto",
//           }}
//         />
//       ))}
//     </>
//   );
// }
