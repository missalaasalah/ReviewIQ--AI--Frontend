import { Typography } from "@mui/material";
import { useLanguage } from "../../i18n/LanguageContext";

import KPICards from "./components/KPICards";
import DashboardCharts from "./components/DashboardCharts";
import RecentReviews from "./components/RecentReviews";
import AIInsights from "./components/AIInsights";

export default function Dashboard() {
  const { t } = useLanguage();

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 800,
          color: "#302A1C",
        }}
      >
        {t("executiveOverview")}
      </Typography>

      <KPICards />

      <DashboardCharts />

      <RecentReviews />

      <AIInsights />
    </>
  );
}
