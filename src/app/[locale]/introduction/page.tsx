"use client";
import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useLocale, useTranslations } from "next-intl";
import { useLocationContext } from "@/context/LocationProvider";
import { Public } from "@mui/icons-material";
import { animationStyles } from "@/components/AnimationStyle";
import { CompanyInfo } from "@/utils/Data/CompanyInfo";

export default function IntroductionPage() {
  const t = useTranslations("Index");
  const locale = useLocale();
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = animationStyles();
  const companyInfo = CompanyInfo(t);
  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      <Header />
      <Box
        gap={5}
        overflow={"hidden"}
        padding={2}
        display={"flex"}
        marginTop={5}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          textTransform={"uppercase"}
          variant="h3"
          fontWeight={700}
          color="secondary"
          marginTop={10}
          className={classes.shiningText}
          textAlign={isSmDown ? "center" : "left"}
        >
          {t("introduction.title")}
        </Typography>
        <Typography
          variant={isSmDown ? "h6" : "h4"}
          fontWeight={700}
          textTransform={"uppercase"}
          color={"info.main"}
          textAlign={"center"}
        >
          0317501823 - {t("introduction.name")}
        </Typography>
        <Box
          height={2}
          bgcolor={"secondary.main"}
          width={isSmDown ? "80%" : "50%"}
        ></Box>
        <Box
          gap={2}
          display={"flex"}
          flexDirection={"column"}
          width={isSmDown ? "100%" : "70%"}
        >
          <Typography
            variant={isSmDown ? "h6" : "h4"}
            fontWeight={700}
            ml={isSmDown ? 0 : 10}
            textTransform={"uppercase"}
            color={"info.main"}
            textAlign={isSmDown ? "center" : "left"}
          >
            {t("introduction.name")}
          </Typography>
          <Box height={3} bgcolor={"background.paper"}></Box>
          {companyInfo.map((item: any, index: any) => (
            <Box key={index}>
              <Box
                marginBottom={2}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"left"}
                ml={isSmDown ? 0 : 10}
              >
                <Box
                  flex={1}
                  alignItems={"center"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={2}
                >
                  <item.icon></item.icon>
                  <Typography variant={isSmDown ? "body2" : "body1"}>
                    {item.name}
                  </Typography>
                </Box>
                <Typography variant={isSmDown ? "body2" : "body1"} flex={1}>
                  {item.detail}
                </Typography>
              </Box>
              <Box height={3} bgcolor={"background.paper"}></Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
