import * as yup from "yup";

export const validationSchema = (t: any) => {
  return yup.object().shape({
    name: yup.string().required(t("validation.required.name")),
    phone: yup.string().required(t("validation.required.phone")),
    email: yup
      .string()
      .email(t("validation.invalid.email"))
      .required(t("validation.required.email")),
    budget: yup.string().required(t("validation.required.budget")),
    province: yup.string().required(t("validation.required.province")),
    district: yup.string().required(t("validation.required.district")),
    ward: yup.string().required(t("validation.required.ward")),
    address: yup.string().required(t("validation.required.address")),
    policyAgreement: yup
      .boolean()
      .oneOf([true], t("validation.required.policyAgreement"))
      .required(t("validation.required.policyAgreement")),
  });
};
