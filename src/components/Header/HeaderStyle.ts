import { makeStyles } from "tss-react/mui";

const HeaderStyle = makeStyles<{ isScroll: boolean }>()(
  (theme, { isScroll }) => ({
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      display: "flex",
      alignItems: "center",
      padding: 2,
      justifyItems: "center",
      width: "100vw",
      top: 0,
      position: "fixed",
      backgroundColor: "rgba(255,255,255,0.8)",
      height: 80,
      transition: "0.2s",
      backdropFilter: isScroll ? "blur(5px)" : "none",
      zIndex: 1000,
    },
    logo: {
      marginLeft: "87px",
      display: "flex",
      alignItems: "center",
    },

    button: {
      position: "relative",
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&:hover::after": {
        width: "100%",
        left: 0,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: 0,
        height: "2px",
        bottom: "-4px",
        left: "50%",
        backgroundColor: theme.palette.secondary.main,
        transition: "all 0.3s ease-in-out",
      },
    },
    select: {
      boxShadow: "none",
      // border: 0,
      "& fieldset": {
        border: "none",
      },
      ".MuiOutlinedInput-notchedOutline": { border: 0 },
      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        border: 0,
      },
      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: 0,
      },
      // backgroundColor: "transparent",
      marginLeft: theme.spacing(2),
    },
  })
);

export default HeaderStyle;
