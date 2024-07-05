import React from "react";
import { Box, Modal, Typography, IconButton } from "@mui/material";
import { useTranslations } from "next-intl";
import CloseIcon from "@mui/icons-material/Close";

interface PolicyModalProps {
  open: boolean;
  handleClose: () => void;
}

const PolicyModal: React.FC<PolicyModalProps> = ({ open, handleClose }) => {
  const t = useTranslations("Index");

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: 600,
          bgcolor: "background.paper",
          borderRadius: "40px",
          boxShadow: 24,
          p: 4,
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(to top right, #FFA0BC, #FFD0E0)",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography
            ml={1}
            id="modal-title"
            fontSize={"1.1rem"}
            component="h2"
            fontWeight={700}
            textTransform={"uppercase"}
          >
            {t("modal.title")}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon fontSize="large" sx={{ color: "black" }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            flex: 1,
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: "20px",
            p: 2,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              maxHeight: "60vh",
              overflowY: "auto",
              pr: 2,
              pl: 2,
            }}
          >
            <Typography
              color={"info.main"}
              variant="body2"
              id="modal-description"
              sx={{ whiteSpace: "pre-line", fontSize: "14px" }}
            >
              {t("modal.content1")}
              {t("modal.content2")}
              {t("modal.content3")}
              {t("modal.content4")}
              {t("modal.content5")}
              {t("modal.content6")}
              {t("modal.content7")}
              {t("modal.content8")}
              {t("modal.content9")}
              {t("modal.content10")}
              {t("modal.content11")}
              {t("modal.content12")}
              {t("modal.content13")}
              {t("modal.content14")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default PolicyModal;
