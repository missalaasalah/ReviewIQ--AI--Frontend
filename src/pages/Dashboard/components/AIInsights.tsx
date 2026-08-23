import { Paper, Typography } from "@mui/material";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function AIInsights() {
  const { t } = useLanguage();

  return (
    <Paper sx={{ padding: 3, marginTop: 4 }}>
      <Typography variant="h5">
        {t("aiInsightsTitle")}
      </Typography>

      <Typography sx={{ mt: 2 }}>
        {t("aiInsightsPlaceholder")}
      </Typography>
    </Paper>
  );
}
