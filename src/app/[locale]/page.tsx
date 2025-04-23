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


      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2616007717038279"
        data-ad-slot="4407560971"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

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
