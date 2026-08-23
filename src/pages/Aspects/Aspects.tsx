import { Box, Paper, Typography } from "@mui/material";
import { useLanguage } from "../../i18n/LanguageContext";

import AspectChart from "./components/AspectChart";
import AspectTable from "./components/AspectTable";

export default function Aspects() {
  const { t } = useLanguage();

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ mb: 4 }}
      >
        {t("aspectAnalysisTitle")}
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <AspectChart />
      </Paper>

      <Paper sx={{ p: 3 }}>
        <AspectTable />
      </Paper>
    </Box>
  );
}
