import { Box } from "@mui/material";
import React from "react";

const ReferenceForm = ({
  handleReference,
}: {
  handleReference: () => void;
}) => {
  const urlImage = "https://phototimevn.com/landingpageImage/franchise.png";
  return (
    <Box
      sx={{
        position: "fixed",
        right: 0,
        top: "25%",
        cursor: "pointer",
        zIndex: 1000,
        maxWidth: "200px",
        "@media (max-width: 900px)": {
          maxWidth: "120px",
        },
        "@media (max-width: 600px)": {
          maxWidth: "80px",
        },
      }}
      onClick={handleReference}
    >
      <img
        style={{
          width: "100%",
          height: "auto",
          maxWidth: 200,
        }}
        src={urlImage}
        alt="pop-up-contact"
      />
    </Box>
  );
};

export default ReferenceForm;
