"use client";

import { Box, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Photobooth from "@/assets/use-photobooth.png";
import QR from "@/assets/use-qr.png";
import App from "@/assets/use-app.png";
import { animationStyles } from "@/components/AnimationStyle";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { HowToUse, RoundedImageProps } from "@/components/Usage/HowToUse";

const UsagePage = () => {
  const t = useTranslations("Index");
  const { classes } = animationStyles();
  const [usage, usageInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const usageAnimation = useSpring({
    opacity: usageInView ? 1 : 0,
    transform: usageInView ? "translateY(0)" : "translateY(50px)",
    config: { duration: 300 },
  });

  const usageItems: RoundedImageProps[] = [
    {
      src: Photobooth,
      alt: "photobooth",
      text: t("usage.content.booth"),
      href: "/usage/photobooth",
    },
    { src: App, alt: "app", text: t("usage.content.app"), href: "/usage/app" },
    {
      src: QR,
      alt: "qr",
      text: t("usage.content.download"),
      href: "/usage/qr-code",
    },
  ];

  return (
    <Box
      height={"100%"}
      id="usage"
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      overflow={"hidden"}
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
        {t("usage.title")}
      </Typography>
      <Box
        position={"relative"}
        display={"flex"}
        flexDirection={"column"}
        alignContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <animated.div style={usageAnimation} ref={usage}>
          <Grid
            alignItems={"center"}
            container
            spacing={4}
            justifyContent="center"
          >
            {usageItems.map((item, index) => (
              <Grid item key={index} alignItems="center">
                <HowToUse
                  src={item.src}
                  alt={item.alt}
                  text={item.text}
                  href={item.href}
                />
              </Grid>
            ))}
          </Grid>
        </animated.div>
      </Box>
    </Box>
  );
};

export default UsagePage;
