import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import UsageStyle from "./UsageStyle";

export interface RoundedImageProps {
  src: StaticImageData | string;
  alt: string;
  text: string;
  href: string;
}

export const HowToUse: React.FC<RoundedImageProps> = ({
  src,
  alt,
  text,
  href,
}) => {
  const locale = useLocale();
  const classes = UsageStyle();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs={12}>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Link href={locale + href}>
          <Box
            height={isSmallScreen ? "35vh" : "50vh"}
            width={isSmallScreen ? "35vh" : "50vh"}
            borderRadius={5}
            overflow={"hidden"}
            position={"relative"}
            className={classes.button}
          >
            <Image src={src} alt={alt} layout="fill" objectFit="cover" />
          </Box>
        </Link>
        <Typography mt={5} fontWeight={600} variant="h4" color="info.main">
          {text}
        </Typography>
      </Box>
    </Grid>
  );
};
