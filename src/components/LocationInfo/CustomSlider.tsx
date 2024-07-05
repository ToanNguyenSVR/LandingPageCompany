"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Backdrop, CircularProgress } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { LocationInfo } from "./LocationInfo";
import { useLocale } from "next-intl";
import { useLocationContext } from "@/context/LocationProvider";

const CustomSlider = () => {
  const { locations } = useLocationContext();
  const locale = useLocale();

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (locations.length > 0) {
      setLoading(false);
    }
  }, [locations]);

  const scrollLeftHandler = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRightHandler = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };
  const onMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <Box display={"flex"} position={"relative"} width="100%" height="100%">
      {loading && (
        <Backdrop
          sx={{
            backgroundColor: "transparent",

            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={loading}
        >
          <CircularProgress color="secondary" />
        </Backdrop>
      )}
      {!loading && (
        <>
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255, 160, 188, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(255, 160, 188, 0.3)",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              padding: 0,
              zIndex: 1,
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
            onClick={scrollLeftHandler}
          >
            <ArrowBackIosIcon
              fontSize="medium"
              color="primary"
              sx={{ marginLeft: "5px" }}
            />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255, 160, 188, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(255, 160, 188, 0.3)",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              padding: 0,
              zIndex: 1,
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
            onClick={scrollRightHandler}
          >
            <ArrowForwardIosIcon fontSize="medium" color="primary" />
          </IconButton>
        </>
      )}
      <Box
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: 2,
          padding: 2,
          cursor: isDragging ? "grabbing" : "grab",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "& > *": {
            scrollSnapAlign: "center",
          },
        }}
      >
        {locations?.map((location) => (
          <Box key={location.id} flex="0 0 auto" width={"50vh"} height={"100%"}>
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
    </Box>
  );
};

export default CustomSlider;
