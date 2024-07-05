"use client";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  Popper,
  Typography,
  ClickAwayListener,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "@/assets/logo.png";
import VI from "@/assets/vi-icon.png";
import EN from "@/assets/en-icon.png";
import KO from "@/assets/ko-icon.png";
import HeaderStyle from "./HeaderStyle";
import { HeaderItem } from "@/utils/Data/HeaderItem";
import { NextLocalNavigation, locales } from "@/middleware";
import MenuIcon from "@mui/icons-material/Menu";
import NavigationLink from "../NavigationLink";

enum Language {
  VI = "vi",
  EN = "en",
  KO = "ko",
}

const settingIcon: Record<Language, StaticImageData> = {
  [Language.EN]: EN,
  [Language.VI]: VI,
  [Language.KO]: KO,
};

export default function Header() {
  const lanTrans = useTranslations("Index");
  const pathname = NextLocalNavigation.usePathname();
  const router = NextLocalNavigation.useRouter();
  const locale = useLocale();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { classes } = HeaderStyle({ isScroll });

  useEffect(() => {
    const handleSetScroll = () => {
      setIsScroll(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleSetScroll);
    return () => {
      window.removeEventListener("scroll", handleSetScroll);
    };
  }, []);

  const smoothScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500;
      let start: number | null = null;

      const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const timeFraction = progress / duration;
        const easedProgress = easeInOutQuad(Math.min(timeFraction, 1));
        const y = startPosition + distance * easedProgress;
        window.scrollTo(0, y);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  const handleScroll = async (sectionId: string) => {
    if (pathname !== "/") {
      sessionStorage.setItem("scrollToSection", sectionId);
      await router.push("/");
    } else {
      smoothScroll(sectionId);
    }
    if (isSmallScreen) {
      setDrawerOpen(false);
    }
  };

  const handleLanguageChange = (locale: string) => {
    router.replace({ pathname }, { locale });
    setAnchorEl(null);
    if (isSmallScreen) {
      setDrawerOpen(false);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box className={classes.headerContainer}>
      <NavigationLink href={"/"}>
        <Box
          flexDirection={"row"}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          justifyItems={"center"}
          marginLeft={"5vw"}
        >
          <Image src={Logo} alt="Logo" />
        </Box>
      </NavigationLink>
      {isSmallScreen ? (
        <IconButton sx={{ marginRight: "5vw" }} onClick={toggleDrawer(true)}>
          <MenuIcon color="secondary" />
        </IconButton>
      ) : (
        <Box
          flexDirection={"row"}
          justifyContent={"center"}
          gap={2}
          marginRight={"5vw"}
          display={"flex"}
          alignItems={"center"}
          justifyItems={"center"}
        >
          {HeaderItem.map((item, index) => (
            <Button
              key={index}
              color="inherit"
              onClick={() => handleScroll(item.label)}
              className={classes.button}
            >
              <Typography variant="body1" color="secondary" fontWeight={600}>
                {lanTrans(`header.${item.label}`)}
              </Typography>
            </Button>
          ))}
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box>
              <Button onClick={handleClick}>
                <Image
                  src={settingIcon[locale as Language]}
                  alt={locale}
                  width={24}
                  height={24}
                />
              </Button>
              <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement="bottom-start"
                modifiers={[
                  {
                    name: "offset",
                    options: {
                      offset: [0, 22],
                    },
                  },
                ]}
                style={{ zIndex: 1300 }}
              >
                <Paper sx={{ backgroundColor: "white", borderRadius: 2 }}>
                  {locales.map((item) => (
                    <MenuItem
                      key={item}
                      onClick={() => handleLanguageChange(item)}
                    >
                      <Image
                        src={settingIcon[item as Language]}
                        alt={item}
                        width={24}
                        height={24}
                      />
                      <Typography
                        variant="body1"
                        color="secondary"
                        fontWeight={600}
                        marginLeft={1}
                      >
                        {lanTrans("LocaleSwitcher.locale", { locale: item })}
                      </Typography>
                    </MenuItem>
                  ))}
                </Paper>
              </Popper>
            </Box>
          </ClickAwayListener>
        </Box>
      )}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          width={"100%"}
          height={"100%"}
          bgcolor={"white"}
          sx={{
            width: 250,
            padding: 2,
          }}
          role="presentation"
        >
          <List>
            {HeaderItem.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleScroll(item.label)}
              >
                <ListItemText
                  primary={lanTrans(`header.${item.label}`)}
                  primaryTypographyProps={{
                    variant: "body1",
                    color: "secondary",
                    fontWeight: 600,
                  }}
                />
              </ListItem>
            ))}
            <Divider />
            {locales.map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => handleLanguageChange(item)}
              >
                <Image
                  src={settingIcon[item as Language]}
                  alt={item}
                  width={24}
                  height={24}
                />
                <ListItemText
                  primary={lanTrans("LocaleSwitcher.locale", { locale: item })}
                  primaryTypographyProps={{
                    variant: "body1",
                    color: "secondary",
                    fontWeight: 600,
                    marginLeft: 1,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
