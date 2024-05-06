import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import "./HeartBeta.css";
import { useNavigate } from "react-router-dom";

export default function HeartBeta() {
  const initialX = window.innerWidth / 2;
  const initialY = window.innerHeight / 2;
  const negative = useNavigate();

  const [heartPosition, setHeartPosition] = useState({
    x: initialX,
    y: initialY,
  });
  const [clickCount, setClickCount] = useState(0);

  const handleMoveHeart = () => {
    // Increment the click count
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Generate random coordinates for the heart's position
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;

    // Update the heart's position
    setHeartPosition({ x: newX, y: newY });

    // Check if the click count reaches 5
    if (newCount === 1) {
      // Reset click count
      setClickCount(0);
      // Show alert
      negative("/quynh");
    }
  };
  return (
    <>
      <Box style={{ position: "relative" }}>
        <Button
          onClick={handleMoveHeart}
          style={{
            position: "absolute",
            left: heartPosition.x,
            top: heartPosition.y,
          }}
        >
          <svg className="heart" viewBox="0 0 32 29.6">
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
        </Button>
      </Box>
    </>
  );
}

// Trái tim tự di chuyển
// import { Box, Button } from "@mui/material";
// import React, { useState, useEffect } from "react";
// import "./HeartBeta.css";

// export default function HeartBeta() {
//   const initialX = window.innerWidth / 2;
//   const initialY = window.innerHeight / 2;

//   const [heartPosition, setHeartPosition] = useState({
//     x: initialX,
//     y: initialY,
//   });
//   const [clickCount, setClickCount] = useState(0);

//   useEffect(() => {
//     const moveInterval = setInterval(() => {
//       // Generate random coordinates for the heart's position
//       const newX = Math.random() * window.innerWidth;
//       const newY = Math.random() * window.innerHeight;

//       // Update the heart's position
//       setHeartPosition({ x: newX, y: newY });
//     }, 1000); // Update heart position every second

//     return () => {
//       clearInterval(moveInterval); // Clean up interval on unmount
//     };
//   }, []); // Empty dependency array to run effect only once

//   const handleMoveHeart = () => {
//     // Increment the click count
//     const newCount = clickCount + 1;
//     setClickCount(newCount);

//     // Check if the click count reaches 5
//     if (newCount === 5) {
//       // Show alert
//       alert("Something");
//     }
//   };

//   return (
//     <>
//       <Box style={{ position: "relative" }}>
//         <Button
//           onClick={handleMoveHeart}
//           style={{
//             position: "absolute",
//             left: heartPosition.x,
//             top: heartPosition.y,
//           }}
//         >
//           <svg className="heart" viewBox="0 0 32 29.6">
//             <path
//               d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
//         c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
//             />
//           </svg>
//         </Button>
//       </Box>
//     </>
//   );
// }
