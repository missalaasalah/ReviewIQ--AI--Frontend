import { Box, Paper, Typography } from "@mui/material";
import { useLanguage } from "../../i18n/LanguageContext";

import RecommendationCards from "./components/RecommendationCards";
import RecommendationTable from "./components/RecommendationTable";

export default function Recommendations() {
  const { t } = useLanguage();

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ mb: 4 }}
      >
        {t("aiRecommendationsTitle")}
      </Typography>

      <RecommendationCards />

      <Paper sx={{ p: 3, mt: 4 }}>
        <RecommendationTable />
      </Paper>
    </Box>
  );
}
