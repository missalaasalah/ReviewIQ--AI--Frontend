import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

import { useLanguage } from "../../i18n/LanguageContext";

export default function Profile() {
  const { t } = useLanguage();

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ mb: 4 }}
      >
        {t("userProfile")}
      </Typography>

      <Card
        sx={{
          width: 400,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Avatar
              sx={{
                width: 80,
                height: 80,
              }}
            >
              A
            </Avatar>

            <Typography variant="h5">
              {t("adminUserName")}
            </Typography>

            <Typography color="text.secondary">
              admin@reviewiq.com
            </Typography>

            <Typography>
              {t("role")}: {t("administrator")}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
