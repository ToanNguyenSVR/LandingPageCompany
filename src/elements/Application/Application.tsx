"use client";

import { HowToUse } from "@/components/Usage/HowToUse";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { animationStyles } from "@/components/AnimationStyle";
import Link from "next/link";
const Android = "http://phototimevn.com/landingpageImage/android.png";
const Ios = "http://phototimevn.com/landingpageImage/ios.png";
const AppPage = () => {
  const t = useTranslations("Index");
  const { classes } = animationStyles();
  return (
    <Box
      height={"100%"}
      id="app"
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Typography
        textTransform={"uppercase"}
        variant="h2"
        fontWeight={700}
        color="secondary"
        marginTop={10}
        marginBottom={5}
        className={classes.shiningText}
        fontSize={{ xs: "2rem", md: "3rem" }}
      >
        {t("app.title")}
      </Typography>
      <Box
        display={"flex"}
        height={{ xs: "15vh", md: "20vh" }}
        flexDirection={"row"}
        width={"100%"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          justifyItems={"center"}
          bgcolor={"secondary.main"}
          height={"100%"}
          width={"50%"}
          gap={1}
          flexDirection={"column"}
        >
          <Typography fontSize={{ xs: "0.6rem", md: "1.5rem" }} color={"white"}>
            {t("app.android")}
          </Typography>

          <Box
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            width={"100%"}
            maxWidth={{ xs: "120px", md: "250px" }}
            overflow={"hidden"}
          >
            <Link href="https://play.google.com/store/apps/details?id=com.phototime.membership">
              <Box
                component="img"
                src={Android}
                alt="android"
                width={"100%"}
                sx={{
                  objectFit: "cover",
                  borderRadius: { xs: 1, md: 2 },
                }}
              />
            </Link>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          justifyItems={"center"}
          bgcolor={"primary.main"}
          flexDirection={"column"}
          height={"100%"}
          width={"50%"}
          gap={1}
        >
          <Typography fontSize={{ xs: "0.6rem", md: "1.5rem" }} color={"white"}>
            {t("app.ios")}
          </Typography>

          <Box
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            width={"100%"}
            maxWidth={{ xs: "120px", md: "250px" }}
            overflow={"hidden"}
          >
            <Link href="https://apps.apple.com/vn/app/photo-time/id6478430752?l=vi">
              <Box
                component="img"
                src={Ios}
                width={"100%"}
                alt="ios"
                sx={{
                  objectFit: "cover",
                  borderRadius: { xs: 1, md: 2 },
                }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AppPage;
