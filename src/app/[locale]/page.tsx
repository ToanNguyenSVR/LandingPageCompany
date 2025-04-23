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
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2616007717038279"
        data-ad-slot="4407560971"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
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
