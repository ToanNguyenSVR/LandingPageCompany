import { Box, Select, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";

const FranchiseStyle = makeStyles((theme: any) => ({
  button: {
    backgroundColor: "secondary.main",
    color: "#fff",
    px: 4,
    py: 1,
    borderRadius: 25,
    width: "50%",
    textTransform: "none",
    fontWeight: "bold",
  },
  root: {
    "& input:-webkit-autofill": {
      boxShadow: "0 0 0 100px #fff  inset !important",
      fontSize: "1rem !important",
      borderRadius: "40px !important",
      padding: "13px !important",
      backgroundColor: "transparent !important",
    },
    "& input:-moz-autofill": {
      fontSize: "1rem !important",
      padding: "8px !important",
      backgroundColor: "transparent !important",
    },
    "& input:-ms-autofill": {
      fontSize: "1rem !important",
      backgroundColor: "transparent !important",
    },
  },
}));

export default FranchiseStyle;

export const StyledBoxContent = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(to bottom, rgba(255, 188, 216, 0.6), rgba(251, 202, 255, 0.6))",
  borderRadius: "40px",
  display: "flex",
  justifyContent: "center",
}));
export const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: "40px",
  border: "2px solid #FFA0BC",
  display: "flex",

  justifyContent: "center",
  "&:before, &:after": {
    borderBottom: "none !important",
  },
  "& fieldset": { border: "none" },
  background: "#fff",
  height: "50px",
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  justifyContent: "center",
  height: "50px",
  background: "#fff",
  borderRadius: "40px",
  border: "2px solid #FFA0BC",
  "& .MuiSelect-select": {
    borderRadius: "40px",
  },
  "&:before, &:after": {
    borderBottom: "none !important",
  },
  "& fieldset": { border: "none" },
}));
