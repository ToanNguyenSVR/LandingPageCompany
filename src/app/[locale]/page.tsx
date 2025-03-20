"use client";
import Header from "@/components/Header/Header";
import AppPage from "../../elements/Application/Application";
import HomePage from "../../elements/Home/Home";
import LocationPage from "../../elements/Location/Location";
import ProductPage from "../../elements/Product/Product";
import UsagePage from "../../elements/Usage/Usage";
import { Box } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import FranchisePage from "@/elements/Franchise/Franchise";
import FixedButton from "@/components/Button/FixedButton";
const Banner = "http://phototimevn.com/landingpageImage/mainbanner.png";

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <Box>
      <Header />
      <img
        alt="banner"
        src={Banner}
        style={{ width: "100%", height: "auto" }}
      />
      <AppPage />

      <HomePage />
      <UsagePage />
      <ProductPage />
      <LocationPage />
      <FranchisePage />
      <Footer />
      <FixedButton />
    </Box>
  );
}
