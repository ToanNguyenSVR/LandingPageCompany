"use client";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
} from "@mui/material";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useLocationContext } from "@/context/LocationProvider";
import { LocationInfo } from "@/components/LocationInfo/LocationInfo";
import { motion, AnimatePresence } from "framer-motion";
import { animationStyles } from "@/components/AnimationStyle";
import { Controller } from "react-hook-form";
import { StyledSelect } from "@/components/Franchise/FranchiseStyle";

const tabContentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};
const Map = "http://phototimevn.com/landingpageImage/map.png";

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
      case "dn":
        filteredLocations = locations.filter((loc) =>
          loc.address.includes("Đà Nẵng")
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
          alignItems={"center"}
          paddingX={{ xs: 2, sm: 5, md: 10 }}
          gap={8}
          justifyContent={"center"}
        >
          {filteredLocations.map((location) => (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              key={location.id}
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

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as string);
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
        <img
          style={{
            width: "100%",
            height: "auto",
            maxWidth: 1000,
            marginTop: "44px",
          }}
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
          {t("location.title")}
        </Typography>
        {isSmDown ? (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <StyledSelect
              onChange={handleSelectChange}
              value={value}
              displayEmpty
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 700,
                    borderRadius: 10,
                    width: 250,
                    backgroundColor: "white",
                    color: "#FFA0BC",
                  },
                },
              }}
            >
              <MenuItem value="all">{t("location.all")}</MenuItem>
              <MenuItem value="sg">{t("location.SG")}</MenuItem>
              <MenuItem value="hn">{t("location.HN")}</MenuItem>
              <MenuItem value="vinh">{t("location.Vinh")}</MenuItem>
              <MenuItem value="dn">{t("location.DN")}</MenuItem>
            </StyledSelect>
          </FormControl>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
            sx={{
              "& .MuiTab-root": {
                fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1.2rem" },
                fontWeight: 600,
                paddingX: { xs: 1, sm: 2, md: 3 },
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
            <Tab value="dn" label={t("location.DN")} />
          </Tabs>
        )}
        <Box mt={5} width={"100%"}>
          <AnimatePresence>{renderTabContent()}</AnimatePresence>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
