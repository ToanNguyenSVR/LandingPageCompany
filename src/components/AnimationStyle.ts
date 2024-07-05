import { makeStyles } from "tss-react/mui";
import { keyframes } from "tss-react";
const primaryColor = "#D01F86";
const secondaryColor = "#FFA0BC";

const shine = keyframes({
  "0%": { left: "-100%" },
  "50%": { left: "100%" },
  "100%": { left: "100%" },
});

const shining = keyframes`
"0%, 100%" { color: ${secondaryColor}},
"50%": { color: ${primaryColor} },
`;

export const animationStyles = makeStyles()((theme) => ({
  shiningText: {
    position: "relative",
    animation: `${shining} 3s infinite`,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
      animation: `${shine} 3s infinite`,
    },
  },
}));
