"use client";

import { Box, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { Photobooth } from "@/components/Photobooth/Photobooth";
import { RoundedImageProps } from "@/components/Usage/HowToUse";
import { animationStyles } from "@/components/AnimationStyle";
import { useState, useEffect, useRef } from "react";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import AdBanner from "@/components/Adsense/AdBanner";
import AdBannerFirst from "@/components/Adsense/AdBannerFirst";
import AdBannerSecond from "@/components/Adsense/AdBannerSecond";

const About1 = "http://phototimevn.com/landingpageImage/intro1.jpg";
const About2 = "http://phototimevn.com/landingpageImage/intro2.jpg";
const About3 = "http://phototimevn.com/landingpageImage/intro3.jpg";
const About4 = "http://phototimevn.com/landingpageImage/intro4.jpg";
const Slogan = "http://phototimevn.com/landingpageImage/slogan.png";
const BasicBooth = "http://phototimevn.com/landingpageImage/basicroom.jpg";
const BanbeBooth = "http://phototimevn.com/landingpageImage/banberoom.jpg";
const HighAngle = "http://phototimevn.com/landingpageImage/highangle.jpg";
const CloudBg = "http://phototimevn.com/landingpageImage/bg-cloud.png";

const HomePage = () => {
  const t = useTranslations("Index");
  const roomItems: RoundedImageProps[] = [
    {
      src: BasicBooth,
      alt: "basicroom",
      text: t("home.room.basic"),
      href: "/room/basic",
    },
    {
      src: BanbeBooth,
      alt: "banberoom",
      text: t("home.room.banbe"),
      href: "/room/banbe",
    },
    {
      src: HighAngle,
      alt: "highangle",
      text: t("home.room.high"),
      href: "/room/high-angle",
    },
  ];

  const aboutImages = [About1, About2, About3, About4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const { classes } = animationStyles();
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.clientWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const [contentRef, contentInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [roomsRef, roomsInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const contentTrail = useTrail(3, {
    opacity: contentInView ? 1 : 0,
    transform: contentInView ? "translateY(0)" : "translateY(20px)",
    config: { duration: 300 },
    reset: !contentInView,
  });

  const roomsTrail = useTrail(roomItems.length + 1, {
    opacity: roomsInView ? 1 : 0,
    transform: roomsInView ? "translateY(0)" : "translateY(20px)",
    config: { duration: 300 },
    reset: !roomsInView,
  });

  return (
    <>
      <AdBannerFirst></AdBannerFirst>
      <AdBannerSecond></AdBannerSecond>
      <Box
        height={"100%"}
        id="home"
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          position={"relative"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={5}
          mt={10}
          sx={{ width: { xs: "80%", md: "33%" } }}
        >
          <img
            alt="slogan"
            src={Slogan}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <animated.div ref={contentRef}>
          <Box
            paddingX={8}
            gap={8}
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              ref={sliderRef}
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                overflow: "hidden",
                scrollSnapType: "x mandatory",
              }}
            >
              {aboutImages.map((img, index) => (
                <Box
                  key={index}
                  flexShrink={0}
                  width="100%"
                  sx={{ scrollSnapAlign: "center" }}
                >
                  <img
                    alt="about"
                    src={img}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
              ))}
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              width={{ xs: "100%", md: "50%" }}
            >
              {contentTrail.map((props, index) => (
                <animated.div key={index} style={props}>
                  {index === 0 && (
                    <Typography
                      variant="h1"
                      fontWeight={700}
                      color="text.secondary"
                    >
                      {t("home.title.part1")}
                    </Typography>
                  )}
                  {index === 1 && (
                    <Typography
                      variant="h1"
                      fontWeight={700}
                      color="text.secondary"
                    >
                      {t("home.title.part2")}
                    </Typography>
                  )}
                  {index === 2 && (
                    <Typography variant="body1" paragraph>
                      {t("home.content")}
                    </Typography>
                  )}
                </animated.div>
              ))}
            </Box>
          </Box>
        </animated.div>
        <Box
          justifyContent={"center"}
          display={"flex"}
          alignContent={"center"}
          alignItems={"center"}
          marginTop={10}
          width={"100%"}
          position="relative"
          py="15vh"
        >
          <img
            alt="cloud"
            src={CloudBg}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "fill",
            }}
          />
          <div ref={roomsRef}>
            <Box
              position={"relative"}
              display={"flex"}
              flexDirection={"column"}
              alignContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
            >
              <animated.div style={roomsTrail[0]}>
                <Typography
                  textTransform={"uppercase"}
                  fontSize={{ xs: "2rem", md: "3rem" }}
                  fontWeight={700}
                  color="secondary"
                  marginBottom={10}
                >
                  {t("home.type")}
                </Typography>
              </animated.div>
              <Grid
                alignItems={"center"}
                container
                spacing={4}
                justifyContent="center"
              >
                {roomItems.map((item, index) => (
                  <Grid item key={index} alignItems="center">
                    <animated.div style={roomsTrail[index + 1]}>
                      <Photobooth
                        src={item.src}
                        alt={item.alt}
                        text={item.text}
                        href={item.href}
                      />
                    </animated.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
