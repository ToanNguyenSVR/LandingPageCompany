"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import BanbeBG from "@/assets/bgbanbe.png";
import BanbeIMG from "@/assets/imagebanbe.png";
import { animationStyles } from "@/components/AnimationStyle";

export default function BanbeRoom() {
  const t = useTranslations("Index");
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = animationStyles();
  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      <Header />
      <Box
        gap={4}
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
          marginBottom={5}
          className={classes.shiningText}
          textAlign={isSmDown ? "center" : "left"}
        >
          {t("home.room.banbe")}
        </Typography>

        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Box position="relative" width="100%" height="70vh">
              <Image
                src={BanbeBG}
                alt="bbbg"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box position="relative" width="100%" height="70vh">
              <Image
                src={BanbeIMG}
                alt="bbimg"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}
