import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { RoundedImageProps } from "../Usage/HowToUse";
import UsageStyle from "../Usage/UsageStyle";
import { useLocale } from "next-intl";
import Link from "next/link";
import NavigationLink from "../NavigationLink";

export const Photobooth: React.FC<RoundedImageProps> = ({
  src,
  alt,
  text,
  href,
}) => {
  const locale = useLocale();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = UsageStyle();
  return (
    <Grid item xs={12}>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <NavigationLink href={href}>
          <Box
            height={isSmallScreen ? "30vh" : "50vh"}
            width={isSmallScreen ? "25vh" : "35vh"}
            borderRadius={1000}
            overflow={"hidden"}
            position={"relative"}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              className={classes.button}
              src={src}
              alt={alt}
            />
          </Box>
        </NavigationLink>
        <Typography
          textTransform={"uppercase"}
          mt={5}
          fontWeight={600}
          variant="h4"
          color="info.main"
        >
          {text}
        </Typography>
      </Box>
    </Grid>
  );
};
