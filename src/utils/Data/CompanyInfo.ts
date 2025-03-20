import {
  Grid3x3,
  LocalPhone,
  LocationOnOutlined,
  MailOutline,
  Menu,
  Public,
  SvgIconComponent,
} from "@mui/icons-material";
interface CompanyInfoItem {
  icon: SvgIconComponent;
  name: string;
  detail: string;
}
export function CompanyInfo(t: any): CompanyInfoItem[] {
  return [
    {
      icon: Public,
      name: t("introduction.interName"),
      detail: "SUNG GA VINA COMPANY LIMITED",
    },
    {
      icon: Menu,
      name: t("introduction.shortName"),
      detail: "SUNG GA VINA",
    },
    {
      icon: Grid3x3,
      name: t("introduction.tax"),
      detail: "0317501823",
    },
    {
      icon: MailOutline,
      name: t("introduction.email"),
      detail: "phototime1974@gmail.com",
    },
    {
      icon: LocationOnOutlined,
      name: t("introduction.address"),
      detail: t("footer.address"),
    },
    {
      icon: LocalPhone,
      name: t("introduction.contact"),
      detail: "0333550741",
    },
  ];
}
