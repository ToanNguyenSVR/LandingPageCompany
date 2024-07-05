import React, { useEffect, useState } from "react";
import { Fab, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { keyframes } from "tss-react";

const shakeAnimation = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const blinkAnimation = keyframes`
  50% {
    opacity: 0.5;
  }
`;
const FixedButton: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 750) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 750) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
      <Fab
        color="primary"
        aria-label="call"
        sx={{
          mb: 2,
          animation: `${shakeAnimation} 1.5s infinite, ${blinkAnimation} 1.5s infinite`,
        }}
        href="tel:0369357270"
      >
        <PhoneIcon />
      </Fab>
      <Fab
        color="secondary"
        aria-label="scroll to top"
        onClick={scrollTop}
        sx={{ display: showScroll ? "flex" : "none" }}
      >
        <ArrowUpwardIcon color="error" />
      </Fab>
    </Box>
  );
};

export default FixedButton;
