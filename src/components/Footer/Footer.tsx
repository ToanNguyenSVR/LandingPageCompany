import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import OriginalLogo from "@/assets/ori-logo.png";
import Tiktok from "@/assets/tiktok.png";
import Ins from "@/assets/instagram.png";
import Facebook from "@/assets/facebook.png";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Index");
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      paddingX={10}
      paddingY={5}
      sx={{ backgroundColor: "#FFF1F9" }}
      display={"flex"}
      justifyContent={"center"}
      bottom={0}
      flexDirection={isMdScreen ? "column" : "row"}
    >
      <Box
        width={isMdScreen ? "100%" : "33%"}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        alignItems={isMdScreen ? "center" : "flex-start"}
      >
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <CallOutlinedIcon color="secondary" />
          <Typography fontSize={"1.1rem"} color="secondary">
            036 935 7270
          </Typography>
        </Box>
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <EmailOutlinedIcon color="secondary" />
          <Typography fontSize={"1.1rem"} color="secondary">
            phototime1974@gmail.com
          </Typography>
        </Box>
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <PlaceOutlinedIcon color="secondary" />
          <Typography fontSize={"1.1rem"} color="secondary">
            {t("footer.address")}
          </Typography>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={isMdScreen ? "100%" : "33%"}
        marginY={isMdScreen ? 3 : 0}
      >
        <Image src={OriginalLogo} alt="original" layout="intrinsic"></Image>
      </Box>
      <Box
        justifyContent={isMdScreen ? "center" : "flex-end"}
        display={"flex"}
        gap={2}
        alignItems={"center"}
        width={isMdScreen ? "100%" : "33%"}
      >
        <Link href="https://www.tiktok.com/@phototimevietnam">
          <Image src={Tiktok} alt="tiktok" width={50} height={50} />
        </Link>
        <Link href="https://www.instagram.com/phototimeofficial">
          <Image src={Ins} alt="ins" width={50} height={50} />
        </Link>
        <Link href="https://www.facebook.com/phototimevn">
          <Image src={Facebook} alt="fb" width={50} height={50} />
        </Link>
      </Box>
    </Box>
  );
}
