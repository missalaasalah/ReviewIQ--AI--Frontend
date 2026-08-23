import { Typography, Paper } from "@mui/material";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function RecentReviews() {
  const { t } = useLanguage();

  return (
    <Paper sx={{ padding: 3, marginTop: 4 }}>
      <Typography variant="h5">
        {t("recentReviews")}
      </Typography>

      <Typography sx={{ mt: 2 }}>
        {t("recentCustomerReviews")}
      </Typography>
    </Paper>
  );
}
