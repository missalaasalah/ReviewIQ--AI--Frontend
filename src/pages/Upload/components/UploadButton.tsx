import { Button } from "@mui/material";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function UploadButton() {
  const { t } = useLanguage();

  return (
    <Button variant="contained" size="large" fullWidth>
      {t("analyzeReviews")}
    </Button>
  );
}
