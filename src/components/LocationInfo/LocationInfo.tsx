import { Box, Button, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Link from "next/link";

interface LocationInfoProps {
  name: string;
  distance: string;
  url: string;
  linkgoogleMap: string;
}

export const LocationInfo = ({
  name,
  distance,
  url,
  linkgoogleMap,
}: LocationInfoProps) => {
  const handleRenderText = (value: string) => {
    if (value?.length > 50) {
      return value.slice(0, 50) + "...";
    }
    return value;
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      height={"100%"}
      width={"100%"}
      sx={{
        backgroundColor: "#FFF1F9",
        borderRadius: 5,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        height={"80%"}
        width={"100%"}
        borderRadius={5}
        overflow={"hidden"}
        position={"relative"}
        component={"img"}
        src={url}
      ></Box>
      <Box
        position="absolute"
        bottom={0}
        width={"100%"}
        height={{
          xs: "30%",
          sm: "35%",
          md: "40%",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          height={"100%"}
          bgcolor={"#FFF1F9"}
          textAlign={"center"}
          borderRadius={5}
          paddingX={2}
          paddingBottom={2}
          sx={{
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
          overflow={"hidden"}
        >
          <Typography
            fontWeight={600}
            color="secondary"
            flexWrap={"nowrap"}
            sx={{ fontSize: "1.3rem", lineHeight: 1 }}
          >
            {name}
          </Typography>
          <Tooltip
            title={distance}
            arrow
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, -14],
                    },
                  },
                ],
              },
            }}
          >
            <Typography
              fontStyle={"italic"}
              variant="body2"
              color="info.main"
              sx={{
                padding: "4px 16px 0.5rem 16px",
                fontSize: "0.9rem",
              }}
            >
              {handleRenderText(distance)}
            </Typography>
          </Tooltip>
          <Link href={linkgoogleMap}>
            <Button
              color="secondary"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderRadius: 5,
                border: "2px solid",
                paddingX: 2,
                height: "2rem",
              }}
              startIcon={<PlaceOutlinedIcon />}
            >
              <Typography textTransform={"none"} fontSize="1rem">
                Direction
              </Typography>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
