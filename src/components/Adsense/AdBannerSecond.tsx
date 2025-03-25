"use client";
import React, { useEffect } from "react";

const AdBannerSecond = () => {
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
        // style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-2616007717038279"
        data-ad-slot="7352935890"
      ></ins>
    </>
  );
};

export default AdBannerSecond;
