import { Box, Typography, Card, CardContent, Switch } from "@mui/material";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Settings() {
  const { t } = useLanguage();

  return (
    <Box>

      <Typography
        variant="h4"
        sx={{ mb: 4 }}
      >
        {t("settings")}
      </Typography>


      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          mb: 3,
        }}
      >
        <CardContent>

          <Typography variant="h5">
            {t("accountSettings")}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            {t("manageProfilePreferences")}
          </Typography>

        </CardContent>
      </Card>


      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent>

          <Typography variant="h5">
            {t("notifications")}
          </Typography>


          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 2,
            }}
          >

            <Typography>
              {t("enableNotifications")}
            </Typography>

            <Switch />

          </Box>

        </CardContent>
      </Card>


    </Box>
  );
}
