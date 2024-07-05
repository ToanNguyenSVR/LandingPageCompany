"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import BasicBG from "@/assets/bgbasic.png";
import InsidePink from "@/assets/inside-pink.png";
import InsideGray from "@/assets/inside-gray.png";
import InsideBlue from "@/assets/inside-blue.png";
import Pink from "@/assets/pink.png";
import Gray from "@/assets/gray.png";
import Blue from "@/assets/blue.png";
import Navy from "@/assets/navy.png";
import { animationStyles } from "@/components/AnimationStyle";
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
        <Image layout="intrinsic" quality={100} src={BasicBG} alt="bg" />
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
            <Image
              height={500}
              layout="intrinsic"
              quality={100}
              src={InsidePink}
              alt="ipink"
            />
            <Typography variant="body1" color={"info.main"} fontWeight={600}>
              {t("home.color.pink")}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <Image
              height={500}
              layout="intrinsic"
              quality={100}
              src={InsideGray}
              alt="igray"
            />
            <Typography variant="body1" color={"info.main"} fontWeight={600}>
              {t("home.color.gray")}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <Image
              height={500}
              layout="intrinsic"
              quality={100}
              src={InsideBlue}
              alt="iblue"
            />
            <Typography variant="body1" color={"info.main"} fontWeight={600}>
              {t("home.color.gray")}
            </Typography>
          </Box>
        </Box>
        <Image
          height={1000}
          layout="intrinsic"
          quality={100}
          src={Pink}
          alt="pink"
        />
        <Image
          height={1000}
          layout="intrinsic"
          quality={100}
          src={Gray}
          alt="gray"
        />
        <Image
          height={1000}
          layout="intrinsic"
          quality={100}
          src={Blue}
          alt="blue"
        />
        <Image
          height={1000}
          layout="intrinsic"
          quality={100}
          src={Navy}
          alt="navy"
        />
      </Box>
      <Footer />
    </Box>
  );
}
