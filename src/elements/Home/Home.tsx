"use client";

import { Box, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Slogan from "@/assets/slogan.png";
import Banner from "@/assets/mainbanner.png";
import BasicBooth from "@/assets/basicroom.jpg";
import BanbeBooth from "@/assets/banberoom.jpg";
import HighAngle from "@/assets/highangle.jpg";
import CloudBg from "@/assets/bg-cloud.png";
import Image from "next/image";
import { Photobooth } from "@/components/Photobooth/Photobooth";
import { RoundedImageProps } from "@/components/Usage/HowToUse";
import { animationStyles } from "@/components/AnimationStyle";
import { useState, useEffect, useRef } from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import About1 from "@/assets/intro1.jpg";
import About2 from "@/assets/intro2.jpg";
import About3 from "@/assets/intro3.jpg";
import About4 from "@/assets/intro4.jpg";

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

  const [contentRef, contentInView, contentEntry] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [roomsRef, roomsInView, roomsEntry] = useInView({
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
    <Box
      height={"100%"}
      id="home"
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Image alt="banner" src={Banner} layout="intrinsic" />

      <Box
        position={"relative"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        my={5}
        sx={{ width: "33%" }}
      >
        <Image alt="slogan" src={Slogan} layout="responsive" />
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
                <Image alt="about" src={img} layout="responsive" />
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
        <Image alt="cloud" src={CloudBg} layout="fill" objectFit="fill" />
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
  );
};

export default HomePage;
