"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Photobooth from "@/assets/use-photobooth.png";
import { animationStyles } from "@/components/AnimationStyle";

export default function PhotoboothDirectionPage() {
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
        marginTop={13}
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
          className={classes.shiningText}
          textAlign={isSmDown ? "center" : "left"}
        >
          {t("usage.content.booth")}
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
            src={Photobooth}
            alt="map"
          />

          <video height={700} controls>
            <source src="/videos/photobooth.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
