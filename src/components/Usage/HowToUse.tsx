import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import UsageStyle from "./UsageStyle";
import NavigationLink from "../NavigationLink";

export interface RoundedImageProps {
  src: string;
  alt: string;
  text: string;
  href: any;
}
// IntrinsicAttributes & Omit<Omit<Omit<Omit<Omit<AnchorHTMLAttributes<HTMLAnchorElement>
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
        <NavigationLink href={href}>
          <Box
            height={isSmallScreen ? "35vh" : "50vh"}
            width={isSmallScreen ? "35vh" : "50vh"}
            borderRadius={5}
            overflow={"hidden"}
            position={"relative"}
            className={classes.button}
          >
            <img
              src={src}
              alt={alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </NavigationLink>
        <Typography mt={5} fontWeight={600} variant="h4" color="info.main">
          {text}
        </Typography>
      </Box>
    </Grid>
  );
};
