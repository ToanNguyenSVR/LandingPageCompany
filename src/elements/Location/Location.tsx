"use client";

import CustomSlider from "@/components/LocationInfo/CustomSlider";
import { Box, Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Spirit from "@/assets/spirit.png";
import PostFB from "@/assets/postFB.png";
import PostTT from "@/assets/postTT.png";
import PostIG from "@/assets/postIG.png";
import Tiktok from "@/assets/tiktok.png";
import Ins from "@/assets/instagram.png";
import Facebook from "@/assets/facebook.png";
import { animationStyles } from "@/components/AnimationStyle";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NavigationLink from "@/components/NavigationLink";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

const variants = {
  animate: {
    x: ["0", "45%", "0"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const bearDanceVariants = {
  dance: {
    scale: [1, 1.05, 1],
    transition: {
      scale: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
      },
    },
  },
};

const LocationPage = () => {
  const t = useTranslations("Index");
  const { classes } = animationStyles();
  const router = useRouter();
  const handleMoreButtonClick = () => {
    router.push("/locations");
  };
  const [locRef, frameInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const locAnimation = useSpring({
    opacity: frameInView ? 1 : 0,
    transform: frameInView ? "translateY(0)" : "translateY(50px)",
    config: { duration: 300 },
  });
  const [infoRef, infoInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const infoAnimation = useSpring({
    opacity: infoInView ? 1 : 0,
    transform: infoInView ? "translateY(0)" : "translateY(20px)",
    config: { duration: 300 },
  });

  return (
    <Box
      height={"100%"}
      id="location"
      paddingTop={10}
      alignItems={"center"}
      display={"flex"}
      marginY={10}
      flexDirection={"column"}
    >
      <Typography
        textTransform={"uppercase"}
        variant="h4"
        fontWeight={700}
        color="secondary"
        position={"relative"}
        marginBottom={5}
        className={classes.shiningText}
        sx={{ fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" } }}
      >
        {t("location.title")}
      </Typography>
      <Box display={"flex"} flexDirection={"column"} width={"80%"}>
        <animated.div style={locAnimation} ref={locRef}>
          <CustomSlider />
        </animated.div>
      </Box>
      <NavigationLink href="/locations">
        <Button
          sx={{
            borderRadius: 5,
            paddingX: 5,
            boxShadow: "none",
            marginY: 2,
            fontSize: { xs: "0.75rem", md: "1rem" },
          }}
          variant="contained"
          color="secondary"
          onClick={handleMoreButtonClick}
        >
          <Typography color="white">{t("moreButton")}</Typography>
        </Button>
      </NavigationLink>
      <Box marginY={"10vh"} width={"15vw"}>
        <motion.div variants={bearDanceVariants} animate="dance">
          <Image src={Spirit} alt="spirit" layout="responsive" />
        </motion.div>
      </Box>
      <Box width="100%" overflow={"hidden"}>
        <Box
          component={motion.div}
          variants={variants}
          whiteSpace="nowrap"
          animate="animate"
          width="100%"
          overflow="hidden"
        >
          <Typography
            textTransform={"uppercase"}
            variant="h4"
            fontWeight={700}
            color="secondary"
            marginBottom={5}
            sx={{ fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" } }}
          >
            {t("followUs")}
          </Typography>
        </Box>
      </Box>
      <animated.div style={infoAnimation} ref={infoRef}>
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          gap={3}
          display={"flex"}
          flexDirection={"row"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            alignItems={"center"}
          >
            <Image
              layout="responsive"
              quality={100}
              src={PostFB}
              alt="fb"
            ></Image>
            <Link href="https://www.facebook.com/phototimevn">
              <Image width={50} src={Facebook} alt="facebook"></Image>
            </Link>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            alignItems={"center"}
          >
            <Image
              layout="responsive"
              quality={100}
              src={PostIG}
              alt="ig"
            ></Image>
            <Link href="https://www.instagram.com/phototimeofficial">
              <Image width={50} src={Ins} alt="ins"></Image>
            </Link>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            alignItems={"center"}
          >
            <Image
              layout="responsive"
              quality={100}
              src={PostTT}
              alt="tt"
            ></Image>
            <Link href="https://www.tiktok.com/@phototimevietnam">
              <Image width={50} src={Tiktok} alt="tik"></Image>
            </Link>
          </Box>
        </Box>
      </animated.div>
    </Box>
  );
};

export default LocationPage;
