import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { RoundedImageProps } from "../Usage/HowToUse";
import UsageStyle from "../Usage/UsageStyle";
import { useLocale } from "next-intl";
import Link from "next/link";

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
        <Link href={locale + href}>
          <Box
            height={isSmallScreen ? "30vh" : "50vh"}
            width={isSmallScreen ? "25vh" : "35vh"}
            borderRadius={1000}
            overflow={"hidden"}
            position={"relative"}
          >
            <Image
              className={classes.button}
              src={src}
              alt={alt}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Link>
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
