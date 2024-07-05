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

export default function Index() {
  return (
    <Box>
      <Header />
      <HomePage />
      <UsagePage />
      <AppPage />
      <ProductPage />
      <LocationPage />
      <FranchisePage />
      <Footer />
      <FixedButton />
    </Box>
  );
}
