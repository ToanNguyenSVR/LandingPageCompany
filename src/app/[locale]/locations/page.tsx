"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Map from "@/assets/map.png";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useLocationContext } from "@/context/LocationProvider";
import { LocationInfo } from "@/components/LocationInfo/LocationInfo";
import { motion, AnimatePresence } from "framer-motion";
import { animationStyles } from "@/components/AnimationStyle";

const tabContentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export default function LocationsPage() {
  const [value, setValue] = useState("all");
  const t = useTranslations("Index");
  const { locations } = useLocationContext();
  const locale = useLocale();
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = animationStyles();
  const renderTabContent = () => {
    let filteredLocations;

    switch (value) {
      case "sg":
        filteredLocations = locations.filter((loc) =>
          loc.address.includes("Hồ Chí Minh")
        );
        break;
      case "hn":
        filteredLocations = locations.filter((loc) =>
          loc.address.includes("Hà Nội")
        );
        break;
      case "vinh":
        filteredLocations = locations.filter((loc) =>
          loc.address.includes("Vinh")
        );
        break;
      case "all":
      default:
        filteredLocations = locations;
        break;
    }

    return (
      <motion.div
        key={value}
        variants={tabContentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          paddingX={10}
          gap={8}
          justifyContent={"center"}
        >
          {filteredLocations.map((location) => (
            <Box
              key={location.id}
              flexBasis={{
                xs: "100%",
                sm: "40%",
                md: "40%",
              }}
              maxWidth={{
                xs: "100%",
                sm: "40%",
                md: "40%",
              }}
            >
              <LocationInfo
                name={
                  locale === "ko"
                    ? location.nameKo
                    : locale === "en"
                    ? location.nameEn
                    : location.name
                }
                distance={
                  locale === "ko"
                    ? location.addressKo
                    : locale === "en"
                    ? location.addressEn
                    : location.address
                }
                url={location.url}
                linkgoogleMap={location.linkgoogleMap}
              />
            </Box>
          ))}
        </Box>
      </motion.div>
    );
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
        <Image
          // layout="responsive"
          width={1000}
          quality={100}
          src={Map}
          alt="map"
        />
        <Typography
          textTransform={"uppercase"}
          variant="h2"
          fontWeight={700}
          color="secondary"
          marginBottom={5}
          className={classes.shiningText}
          textAlign={isSmDown ? "center" : "left"}
        >
          {" "}
          {t("location.title")}
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
          sx={{
            "& .MuiTab-root": {
              fontSize: "1.25rem",
              fontWeight: 600,
              paddingX: 10,
              "&:hover": {
                color: "primary.main",
              },
            },
            "& .MuiTabs-indicator": {
              height: "4px",
              width: "100px",
            },
          }}
        >
          <Tab value="all" label={t("location.all")} />
          <Tab value="sg" label={t("location.SG")} />
          <Tab value="hn" label={t("location.HN")} />
          <Tab value="vinh" label={t("location.Vinh")} />
        </Tabs>
        <Box mt={5} width={"100%"}>
          <AnimatePresence>{renderTabContent()}</AnimatePresence>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
