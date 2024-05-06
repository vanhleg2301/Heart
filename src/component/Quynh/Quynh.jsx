import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // Thêm dòng này
import "./Quynh.css";

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

export default function Quynh() {
  const [images, setImages] = useState(() => {
    const savedImages = JSON.parse(localStorage.getItem("savedImages"));
    return savedImages || [];
  });
  const [allImagesDisplayed, setAllImagesDisplayed] = useState(false);
  const imageWidth = 100;
  const maxWidth = 1500;

  const handleClick = () => {
    if (allImagesDisplayed) {
      alert("Bye Bye bé iu");
      return;
    }

    const selectedImgIndex = images.length;
    const selectedImgSrc = img[selectedImgIndex];

    const rowNum = Math.floor(selectedImgIndex / (maxWidth / imageWidth));
    const colNum = selectedImgIndex % (maxWidth / imageWidth);

    const x = colNum * (imageWidth + 10);
    const y = rowNum * (imageWidth + 10);

    const newImages = [...images, { src: selectedImgSrc, x, y }];
    setImages(newImages);
    localStorage.setItem("savedImages", JSON.stringify(newImages));
  };

  useEffect(() => {
    if (images.length === img.length) {
      setAllImagesDisplayed(true);
    }
  }, [images]);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleClick} style={{ zIndex: 9999 }}>
              Show Image
            </Button>
          </Grid>

          <Grid item md={1}></Grid>
          <Grid
            item
            md={10}
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            {images.map((image, index) => (
              <Box
                sx={{
                  margin: "5px",
                  width: imageWidth + "px",
                  flexShrink: 0,
                }}
                key={index}
                title={`${index + 1}`}
              >
                <Link to={`/quynh/${index}`}>
                  <img
                    key={index}
                    src={image.src}
                    alt={`Image ${index}`}
                    style={{
                      left: image.x + "px",
                      top: image.y + "px",
                      width: imageWidth + "px",
                      height: "auto",
                      border: "5px solid #ddd",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
                    }}
                  />
                </Link>
              </Box>
            ))}
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </Container>
    </>
  );
}
