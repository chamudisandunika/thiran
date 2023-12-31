import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Image3 from "../../assets/GettyImages-470333827-59d7cc980d327a0011d4b715.jpg";
import Image1 from "../../assets/8-Chest-Exercises-That-Can-Be-Done-Without-A-Bench-1.jpg";
import Image2 from "../../assets/shutterstock_1139618876-1280x853.jpg";

const images = [Image1, Image2, Image3];

const StyledBox = styled(Box)(({ theme }) => ({

  width: "60%",
  height: "40%",
  marginTop: "3rem",
  textAlign: "left",
  marginBottom: "5rem",
  padding: "1rem",
  marginRight: "3rem",
  marginLeft: "2rem",
 
}));

function WorkoutTrainers() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(timer);
  }, []);

  return (
    <Container maxWidth="" style={{ backgroundColor: "#f8f8f8"}}>
      <Box sx={{ height: "100vh", display: "flex", width:"100%"}}>
        <Box sx={{ marginTop: "5rem",marginLeft: "5rem" }}>
          {/* Animate the image from the right-hand side */}
          <motion.img
            src={images[currentImage]}
            alt="Virtual Gym"
            style={{ width: "100%", height: "80%", marginTop: "2rem" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
          />
        </Box>
        <StyledBox>
          <Typography variant="h3" sx={{ textAlign: "left", fontWeight: "bold", marginTop: "2.5rem" }}>Workout With Best Trainers</Typography>
          <Typography variant="body1" sx={{ fontSize: "18px", textAlign: "justify", marginTop: "2rem" }}>
          Working with the best trainers at a gym offers an unparalleled fitness journey characterized by expert guidance, motivation, and personalized attention. These experienced trainers possess in-depth knowledge of various workout techniques and are adept at tailoring fitness plans to individual needs and goals. Through one-on-one coaching and group sessions, they provide valuable insights, correct form, and offer constant encouragement, empowering gym-goers to achieve optimal results and surpass their fitness aspirations. The best trainers foster a supportive and positive environment, instilling confidence and self-discipline, making each workout session an inspiring and transformative experience on the path to enhanced health and well-being.
          </Typography>
        </StyledBox>
      </Box>
    </Container>
  );
}

export default WorkoutTrainers;
