"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { animationStyles } from "@/components/AnimationStyle";

const Step1 = "http://phototimevn.com/landingpageImage/qrstep1.png";
const Step2 = "http://phototimevn.com/landingpageImage/qrstep2.png";
const Step3 = "http://phototimevn.com/landingpageImage/qrstep3.png";
export default function QRCode() {
  const t = useTranslations("Index");
  const locale = useLocale();
  const theme = useTheme();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = animationStyles();

  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      <Header />
      <Box
        gap={5}
        overflow={"hidden"}
        padding={2}
        marginTop={12}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          textTransform={"uppercase"}
          variant="h2"
          fontWeight={700}
          color="secondary"
          marginBottom={5}
          className={classes.shiningText}
          textAlign={"center"}
        >
          {t("usage.content.download")}
        </Typography>

        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={5}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          flexWrap={"wrap"}
        >
          <Box
            width={isMdDown ? "100%" : "30%"}
            display={"flex"}
            justifyContent={"center"}
            padding={1}
          >
            <img
              src={Step1}
              alt="step1"
              style={{ width: "100%", height: "auto", maxWidth: 600 }}
            />
          </Box>
          <Box
            width={isMdDown ? "100%" : "30%"}
            display={"flex"}
            justifyContent={"center"}
            padding={1}
          >
            <img
              src={Step2}
              alt="step2"
              style={{ width: "100%", height: "auto", maxWidth: 600 }}
            />
          </Box>
          <Box
            width={isMdDown ? "100%" : "30%"}
            display={"flex"}
            justifyContent={"center"}
            padding={1}
          >
            <img
              src={Step3}
              alt="step3"
              style={{ width: "100%", height: "auto", maxWidth: 600 }}
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
