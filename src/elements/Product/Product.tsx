"use client";

import { HowToUse } from "@/components/Usage/HowToUse";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { animationStyles } from "@/components/AnimationStyle";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
const BannerFrame = "http://phototimevn.com/landingpageImage/banner-frame.png";
const Frame1 = "http://phototimevn.com/landingpageImage/frame1.jpg";
const Frame2 = "http://phototimevn.com/landingpageImage/frame2.jpg";
const Frame3 = "http://phototimevn.com/landingpageImage/frame3.jpg";
const Frame4 = "http://phototimevn.com/landingpageImage/frame4.jpg";
const Frame5 = "http://phototimevn.com/landingpageImage/frame5.jpg";
const Frame6 = "http://phototimevn.com/landingpageImage/frame6.jpg";
interface FrameProps {
  src: string;
  color: string;
}

const ProductPage = () => {
  const t = useTranslations("Index");
  const { classes } = animationStyles();
  const frames: FrameProps[] = [
    { src: Frame1, color: "#ffcccc" },
    { src: Frame2, color: "#ccffcc" },
    { src: Frame3, color: "#ccccff" },
    { src: Frame4, color: "#ffccff" },
    { src: Frame5, color: "#ffffcc" },
    { src: Frame6, color: "#ccffff" },
  ];

  const [frameRef, frameInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const frameAnimation = useSpring({
    opacity: frameInView ? 1 : 0,
    transform: frameInView ? "translateY(0)" : "translateY(20px)",
    config: { duration: 200 },
  });

  return (
    <Box
      id="frame"
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      paddingTop={12}
      // paddingX={{ xs: 2, md: 8 }}
    >
      <Typography
        textTransform={"uppercase"}
        variant="h2"
        fontWeight={700}
        color="secondary"
        marginBottom={5}
        className={classes.shiningText}
        fontSize={{ xs: "2rem", md: "3rem" }}
      >
        {t("frame.title")}
      </Typography>
      <animated.div style={frameAnimation} ref={frameRef}>
        <Box
          marginBottom={20}
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={5}
        >
          {frames.map((frame, index) => (
            <Box
              key={index}
              height={{ xs: "20vh", sm: "30vh", md: "40vh", lg: "50vh" }}
              width={{ xs: "20vh", sm: "30vh", md: "40vh", lg: "50vh" }}
              borderRadius={5}
              overflow={"hidden"}
              position={"relative"}
              alignItems={"center"}
              display={"flex"}
              justifyContent={"center"}
            >
              <Box position={"relative"} width={"100%"} height={"100%"}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={frame.src}
                  alt={`frame${index + 1}`}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </animated.div>

      <img style={{ width: "100%" }} src={BannerFrame} alt="BannerFrame" />
    </Box>
  );
};

export default ProductPage;
