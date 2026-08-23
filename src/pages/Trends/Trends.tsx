import { Box, Typography } from "@mui/material";
import { useLanguage } from "../../i18n/LanguageContext";
import TrendTable from "./components/TrendTable";

export default function Trends() {
  const { t } = useLanguage();

  return (
    <Box>

      <Typography
        variant="h4"
        sx={{ mb: 4 }}
      >
        {t("trendAnalysisTitle")}
      </Typography>


      <TrendTable />

    </Box>
  );
}
