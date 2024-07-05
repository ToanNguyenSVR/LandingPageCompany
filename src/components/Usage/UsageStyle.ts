import { makeStyles } from "@mui/styles";

const UsageStyle = makeStyles((theme: any) => ({
  button: {
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
  },
}));

export default UsageStyle;
