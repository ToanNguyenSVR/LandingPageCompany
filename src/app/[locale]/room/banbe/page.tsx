"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

import { animationStyles } from "@/components/AnimationStyle";
const BanbeBG = "http://phototimevn.com/landingpageImage/bgbanbe.png";
const BanbeIMG = "http://phototimevn.com/landingpageImage/imagebanbe.png";
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
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box position="relative" width="100%">
              <img
                src={BanbeBG}
                alt="bbbg"
                style={{ width: "100%", height: "70vh" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box position="relative" width="100%">
              <img
                src={BanbeIMG}
                alt="bbimg"
                style={{ width: "100%", height: "70vh" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}
