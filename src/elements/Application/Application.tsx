"use client";

import { HowToUse } from "@/components/Usage/HowToUse";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Android from "@/assets/android.png";
import Ios from "@/assets/ios.png";

import Image from "next/image";
import { animationStyles } from "@/components/AnimationStyle";
import Link from "next/link";

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
        height={"20vh"}
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
        >
          <Box right={0} width={"30vh"}>
            <Link href="https://play.google.com/store/apps/details?id=com.phototime.membership">
              <Image src={Android} alt="app" layout="responsive"></Image>
            </Link>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          justifyItems={"center"}
          bgcolor={"primary.main"}
          height={"100%"}
          width={"50%"}
        >
          <Box width={"30vh"}>
            <Link href="https://apps.apple.com/vn/app/photo-time/id6478430752?l=vi">
              <Image src={Ios} alt="app" layout="responsive"></Image>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AppPage;
