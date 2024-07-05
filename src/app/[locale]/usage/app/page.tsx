"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import App from "@/assets/use-app.png";
import { animationStyles } from "@/components/AnimationStyle";

export default function AppPage() {
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
        marginTop={isSmDown ? 8 : 13}
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
          textAlign={isSmDown ? "center" : "left"}
        >
          {t("usage.content.app")}
        </Typography>

        <Box
          display={"flex"}
          flexDirection={isMdDown ? "column" : "row"}
          alignItems={"center"}
          gap={5}
          justifyContent={"center"}
        >
          <Image
            height={700}
            layout="intrinsic"
            quality={100}
            src={App}
            alt="map"
          />
          <video autoPlay height={700} controls>
            <source src="/videos/app.mp4" type="video/mp4" />
          </video>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
