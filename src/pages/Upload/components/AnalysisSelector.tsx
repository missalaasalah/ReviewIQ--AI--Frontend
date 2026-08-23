import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function AnalysisSelector() {
  const { t } = useLanguage();

  return (
    <FormControl>
      <FormLabel>{t("analysisType")}</FormLabel>

      <RadioGroup defaultValue="absa">
        <FormControlLabel
          value="absa"
          control={<Radio />}
          label={t("aspectBasedSentiment")}
        />
        <FormControlLabel
          value="overall"
          control={<Radio />}
          label={t("overallSentiment")}
        />
      </RadioGroup>
    </FormControl>
  );
}
