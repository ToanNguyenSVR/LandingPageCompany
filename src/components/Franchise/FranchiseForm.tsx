import React, { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Link,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { validationSchema } from "./validationSchema";
import FranchiseStyle, {
  StyledSelect,
  StyledTextField,
} from "./FranchiseStyle";
import { useTranslations } from "next-intl";
import { formatCurrency, parseCurrency } from "@/utils/FormatData/Currency";
import CircleChecked from "@mui/icons-material/CheckCircle";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import PolicyModal from "./PolicyModal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useApi from "@/hooks/useApi";
import { ENDPOINTS } from "@/config/URL";
interface IFormInput {
  name: string;
  phone: string;
  email: string;
  budget: string;
  province: string;
  district: string;
  ward: string;
  address: string;
  policyAgreement: boolean;
}

const URL = "https://open.oapi.vn/location";

const FranchiseForm: React.FC = () => {
  const t = useTranslations("Index");
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue,
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema(t)),
  });
  const classes = FranchiseStyle();
  const [openModal, setOpenModal] = useState(false);
  const [success, setSuccess] = useState("");
  const { callApi, loading, error, data } = useApi();

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  const [provinces, setProvinces] = useState<
    { label: string; value: string }[]
  >([]);
  const [districts, setDistricts] = useState<
    { label: string; value: string }[]
  >([]);
  const [wards, setWards] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    fetch(`${URL}/provinces?page=0&size=100`)
      .then((res) => res.json())
      .then((data) => {
        const provinceOptions = data.data.map((province: any) => ({
          label: province.name,
          value: province.id,
        }));
        setProvinces(provinceOptions);
      });
  };

  const watchProvince = watch("province");
  const watchDistrict = watch("district");

  useEffect(() => {
    if (watchProvince) {
      fetchDistricts(watchProvince);
    }
    console.log(watchProvince);
  }, [watchProvince]);

  const fetchDistricts = async (provinceId: string) => {
    fetch(`${URL}/districts?page=0&size=100&provinceId=${provinceId}`)
      .then((res) => res.json())
      .then((data) => {
        const districtOptions = data.data.map((district: any) => ({
          label: district.name,
          value: district.id,
        }));
        setDistricts(districtOptions);
        setWards([]);
      });
  };

  useEffect(() => {
    if (watchDistrict) {
      fetchWards(watchDistrict);
    }
    console.log(watchDistrict);
  }, [watchDistrict]);

  const fetchWards = async (districtId: string) => {
    fetch(`${URL}/wards?page=0&size=100&districtId=${districtId}`)
      .then((res) => res.json())
      .then((data) => {
        const wardOptions = data.data.map((ward: any) => ({
          label: ward.name,
          value: ward.id,
        }));
        setWards(wardOptions);
      });
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, "");
    const formattedValue = formatCurrency(value);
    setValue("budget", formattedValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      e.key !== "Tab" &&
      e.key !== "Delete"
    ) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const selectedProvince = provinces.find((p) => p.value === data.province);
    const selectedDistrict = districts.find((d) => d.value === data.district);
    const selectedWard = wards.find((w) => w.value === data.ward);
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address:
        data.address +
        ", " +
        selectedWard?.label +
        ", " +
        selectedDistrict?.label +
        ", " +
        selectedProvince?.label,
      amount: parseCurrency(data.budget),
    };

    try {
      await callApi(ENDPOINTS.SEND_EMAIL, "POST", payload as any);

      if (!error) {
        setSuccess(
          parseCurrency(data.budget) < 500000000
            ? "successLessThan500"
            : "successMoreThan500"
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <Grid item xs={12} paddingX={{ xs: 2, md: 8 }}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid paddingTop={10} container spacing={2} width={"100%"}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">{t("form.name")}</Typography>
            <StyledTextField
              {...register("name")}
              error={!!errors.name}
              className={classes.root}
              fullWidth
            />
            <Typography fontSize={"0.75rem"} color="red" ml={2}>
              {errors.name ? errors.name.message : ""}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">{t("form.phone")}</Typography>
            <StyledTextField
              {...register("phone")}
              type="number"
              error={!!errors.phone}
              fullWidth
              className={classes.root}
              inputProps={{ maxLength: 10 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Typography color={"secondary"}>+84</Typography>
                  </InputAdornment>
                ),
              }}
            />
            <Typography fontSize={"0.75rem"} color="red" ml={2}>
              {errors.phone ? errors.phone.message : ""}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">{t("form.email")}</Typography>
            <StyledTextField
              {...register("email")}
              error={!!errors.email}
              fullWidth
              className={classes.root}
            />
            <Typography fontSize={"0.75rem"} color="red" ml={2}>
              {errors.email ? errors.email.message : ""}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">{t("form.budget")}</Typography>
            <StyledTextField
              {...register("budget")}
              error={!!errors.budget}
              type="text"
              onChange={handleCurrencyChange}
              fullWidth
              onKeyDown={handleKeyDown}
              className={classes.root}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Typography color={"secondary"}>VND</Typography>
                  </InputAdornment>
                ),
              }}
            />
            <Typography fontSize={"0.75rem"} color="red" ml={2}>
              {errors.budget ? errors.budget.message : ""}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">{t("form.province")}</Typography>
            <FormControl fullWidth error={!!errors.province} sx={{ mb: 2 }}>
              <Controller
                name="province"
                control={control}
                render={({ field }) => (
                  <StyledSelect
                    {...field}
                    displayEmpty
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 700,
                          borderRadius: 10,
                          padding: 10,
                          width: 250,
                          backgroundColor: "white",
                          color: "#FFA0BC",
                        },
                      },
                    }}
                  >
                    {provinces.map((province) => (
                      <MenuItem key={province.value} value={province.value}>
                        {province.label}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                )}
              />
              {errors.province && (
                <Typography fontSize={"0.75rem"} color="red" ml={2}>
                  {errors.province ? errors.province.message : ""}
                </Typography>
              )}
            </FormControl>
          </Grid>
          {watchProvince && (
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">{t("form.district")}</Typography>
              <FormControl fullWidth error={!!errors.district} sx={{ mb: 2 }}>
                <Controller
                  name="district"
                  control={control}
                  render={({ field }) => (
                    <StyledSelect
                      {...field}
                      disabled={!watchProvince}
                      fullWidth
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 700,
                            borderRadius: 10,
                            padding: 10,
                            width: 250,
                            backgroundColor: "white",
                            color: "#FFA0BC",
                          },
                        },
                      }}
                    >
                      {districts.map((district) => (
                        <MenuItem key={district.value} value={district.value}>
                          {district.label}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                  )}
                />
                {errors.district && (
                  <Typography fontSize={"0.75rem"} color="red" ml={2}>
                    {errors.district.message}
                  </Typography>
                )}
              </FormControl>
            </Grid>
          )}
          {watchDistrict && (
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">{t("form.ward")}</Typography>
              <FormControl fullWidth error={!!errors.ward} sx={{ mb: 2 }}>
                <Controller
                  name="ward"
                  control={control}
                  render={({ field }) => (
                    <StyledSelect
                      {...field}
                      disabled={!watchDistrict}
                      fullWidth
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 700,
                            borderRadius: 10,
                            padding: 10,
                            width: 250,
                            backgroundColor: "white",
                            color: "#FFA0BC",
                          },
                        },
                      }}
                    >
                      {wards.map((ward) => (
                        <MenuItem key={ward.value} value={ward.value}>
                          {ward.label}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                  )}
                />
                {errors.ward && (
                  <Typography fontSize={"0.75rem"} color="red" ml={2}>
                    {errors.ward.message}
                  </Typography>
                )}
              </FormControl>
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography variant="body2">{t("form.address")}</Typography>
            <StyledTextField
              {...register("address")}
              error={!!errors.address}
              fullWidth
              className={classes.root}
            />
            <Typography fontSize={"0.75rem"} color="red" ml={2}>
              {errors.address ? errors.address.message : ""}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
              >
                <FormControlLabel
                  control={
                    <Controller
                      name="policyAgreement"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          color="primary"
                          {...field}
                          icon={<CircleUnchecked color="primary" />}
                          checkedIcon={<CircleChecked />}
                        />
                      )}
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      color={"primary"}
                      style={{ flex: 1 }}
                    >
                      {t("form.policyAgreement")}
                    </Typography>
                  }
                />
                <Typography
                  color={"primary"}
                  onClick={handleOpenModal}
                  textTransform={"none"}
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                  variant="body2"
                >
                  {t("form.readMore")}
                </Typography>
              </Box>
              {errors.policyAgreement && (
                <Typography fontSize={"0.75rem"} color="red" ml={4}>
                  {errors.policyAgreement.message}
                </Typography>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Box mb={10} textAlign="center" mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : t("form.send")}
          </Button>
          {success === "successLessThan500" && (
            <Box
              mt={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CheckCircleIcon color="success" />
              <Typography color="success.main" variant="body2" ml={1}>
                {t("form.reject")}
              </Typography>
            </Box>
          )}
          {success === "successMoreThan500" && (
            <Box
              mt={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CheckCircleIcon color="success" />
              <Typography color="success.main" variant="body2" ml={1}>
                {t("form.success")}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <PolicyModal open={openModal} handleClose={handleCloseModal} />
    </Grid>
  );
};
export default FranchiseForm;
