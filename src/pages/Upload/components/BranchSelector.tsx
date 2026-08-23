import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function BranchSelector() {
  const { t } = useLanguage();

  return (
    <FormControl fullWidth>
      <InputLabel>{t("branch")}</InputLabel>

      <Select label={t("branch")} defaultValue="">
        <MenuItem value="nasr">{t("nasr")}</MenuItem>
        <MenuItem value="maadi">{t("maadi")}</MenuItem>
        <MenuItem value="dokki">{t("dokki")}</MenuItem>
      </Select>
    </FormControl>
  );
}
