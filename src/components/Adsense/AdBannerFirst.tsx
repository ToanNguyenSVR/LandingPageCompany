"use client";
import React, { useEffect } from "react";

const AdBannerFirst = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).adsbygoogle) {
      try {
        (window as any).adsbygoogle.push({});
      } catch (error: any) {
        console.error("Adsense error:", error.message);
      }
    }
  }, []);
  return (
    <>
      <ins
        className="adsbygoogle"
         style={{ display: "block" }}
        data-ad-client="ca-pub-2616007717038279"
        data-ad-slot="5467936750"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

export default AdBannerFirst;
