import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const img = [
  "q1.jpg",
  "q2.jpg",
  "q3.jpg",
  "q4.jpg",
  "q5.PNG",
  "q6.PNG",
  "q7.JPG",
  "q8.JPG",
  "q9.jpg",
  "q10.JPG",
  "q11.JPG",
  "q12.jpg",
  "q13.jpg",
  "q14.JPG",
  "q15.PNG",
  "q16.JPG",
  "q17.jpg",
  "q18.jpg",
  "q19.jpg",
  "q20.JPG",
  "q21.JPG",
  "q22.JPG",
  "q23.JPG",
  "q24.JPG",
  "q25.JPG",
  "q26.JPG",
  "q27.JPG",
  "q28.JPG",
  "q27.JPG",
  "qq29.JPG",
  "q30.JPG",
  "q31.JPG",
  "q32.JPG",
  "q33.jpg",
  "q34.JPG",
  "q35.JPG",
  "q36.JPG",
  "q37.JPG",
  "q38.JPG",
  "q39.JPG",
  "q40.JPG",
  "q41.JPG",
  "q42.PNG",
  "q43.jpg",
  "q44.JPG",
  "q45.jpg",
  "q46.JPG",
  "q47.JPG",
  "q48.JPG",
  "v.jpg",
  "v1.PNG",
];

export default function QuynhDetail() {
  const { id } = useParams();
  const savedImages = JSON.parse(localStorage.getItem("savedImages"));
  console.log(savedImages[id]);

  if (!savedImages || !savedImages[id]) {
    return <Box>Error: Image not found</Box>;
  }

  return (
    <Box>
      <img
        src={savedImages[id].src}
        alt={`Image ${id}`}
        style={{ width: "100px", height: "auto" }}
      />
    </Box>
  );
}
