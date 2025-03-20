"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { animationStyles } from "@/components/AnimationStyle";
const BasicBG = "http://phototimevn.com/landingpageImage/bgbasic.png";
const InsidePink = "http://phototimevn.com/landingpageImage/inside-pink.png";
const InsideGray = "http://phototimevn.com/landingpageImage/inside-gray.png";
const InsideBlue = "http://phototimevn.com/landingpageImage/inside-blue.png";
const Pink = "http://phototimevn.com/landingpageImage/pink.png";
const Gray = "http://phototimevn.com/landingpageImage/gray.png";
const Blue = "http://phototimevn.com/landingpageImage/blue.png";
const Navy = "http://phototimevn.com/landingpageImage/navy.png";
export default function BasicRoom() {
  const t = useTranslations("Index");
  const theme = useTheme();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = animationStyles();
  return (
    <Box
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={5}
    >
      <Header />
      <Box
        gap={4}
        overflow={"hidden"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <img src={BasicBG} alt="bg" />
        <Typography
          textTransform={"uppercase"}
          variant="h2"
          fontWeight={700}
          color="secondary"
          marginBottom={5}
          className={classes.shiningText}
          textAlign={isSmDown ? "center" : "left"}
        >
          {t("home.room.basic")}
        </Typography>

        <Box display={"flex"} flexDirection={"row"} gap={5}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <img
              style={{ maxHeight: 500, width: "100%", height: "100%" }}
              src={InsidePink}
              alt="ipink"
            />
            <Typography
              variant="body1"
              color={"info.main"}
              fontWeight={600}
              fontSize={"1rem"}
            >
              {t("home.color.pink")}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <img
              style={{ maxHeight: 500, width: "100%", height: "100%" }}
              src={InsideGray}
              alt="igray"
            />
            <Typography
              variant="body1"
              color={"info.main"}
              fontWeight={600}
              fontSize={"1rem"}
            >
              {t("home.color.gray")}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <img
              style={{ maxHeight: 500, width: "100%", height: "100%" }}
              src={InsideBlue}
              alt="iblue"
            />
            <Typography
              variant="body1"
              color={"info.main"}
              fontSize={"1rem"}
              fontWeight={600}
            >
              {t("home.color.gray")}
            </Typography>
          </Box>
        </Box>
        <img height={1000} src={Pink} alt="pink" />
        <img height={1000} src={Gray} alt="gray" />
        <img height={1000} src={Blue} alt="blue" />
        <img height={1000} src={Navy} alt="navy" />
      </Box>
      <Footer />
    </Box>
  );
}
