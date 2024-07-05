"use client";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { animationStyles } from "@/components/AnimationStyle";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import FranchiseForm from "@/components/Franchise/FranchiseForm";
import Image from "next/image";
import Logo from "@/assets/phototime-logo.png";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { StyledBoxContent } from "@/components/Franchise/FranchiseStyle";

const FranchisePage = () => {
  const t = useTranslations("Index");
  const { classes } = animationStyles();

  const [leftRef, leftInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [rightRef, rightInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const leftAnimation = useSpring({
    opacity: leftInView ? 1 : 0,
    transform: leftInView ? "translateX(0)" : "translateX(-30px)",
    config: { duration: 500 },
  });

  const rightAnimation = useSpring({
    opacity: rightInView ? 1 : 0,
    transform: rightInView ? "translateX(0)" : "translateX(30px)",
    config: { duration: 500 },
  });

  return (
    <Box
      height={"100%"}
      id="franchise"
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      paddingBottom={20}
      paddingTop={12}
      overflow={"hidden"}
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
        textAlign={"center"}
      >
        {t("franchise.title")}
      </Typography>
      <StyledBoxContent marginX={{ xs: 2, md: 5 }}>
        <animated.div style={rightAnimation} ref={rightRef}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              display={"flex"}
              justifyContent={"center"}
              paddingY={5}
            >
              <animated.div style={leftAnimation} ref={leftRef}>
                <Box
                  paddingX={10}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={{ xs: "center", sm: "flex-start" }}
                  height={"100%"}
                  gap={2}
                  maxWidth="100%"
                  overflow="hidden"
                  justifyContent={"center"}
                >
                  <Box width="100%" maxWidth={700}>
                    <Image src={Logo} alt="Logo" layout="responsive" />
                  </Box>
                  <Box
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                    flexWrap="wrap"
                  >
                    <EmailOutlinedIcon color="info" />
                    <Typography
                      variant="body1"
                      fontSize={{ xs: "1rem", md: "1.25rem" }}
                    >
                      phototime1974@gmail.com
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                    flexWrap="wrap"
                  >
                    <CallOutlinedIcon color="info" />
                    <Typography
                      variant="body1"
                      fontSize={{ xs: "1rem", md: "1.25rem" }}
                    >
                      0765370498 <br /> 0325167270
                    </Typography>
                  </Box>
                </Box>
              </animated.div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FranchiseForm />
            </Grid>
          </Grid>
        </animated.div>
      </StyledBoxContent>
    </Box>
  );
};

export default FranchisePage;
