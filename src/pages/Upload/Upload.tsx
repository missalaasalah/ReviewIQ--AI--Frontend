import { Box, Typography } from "@mui/material";
import { useLanguage } from "../../i18n/LanguageContext";

import UploadCard from "./components/UploadCard";
import BranchSelector from "./components/BranchSelector";
import AnalysisSelector from "./components/AnalysisSelector";
import UploadButton from "./components/UploadButton";


export default function Upload() {
  const { t } = useLanguage();

  return (
    <Box>

      <Typography
        variant="h4"
        sx={{
          mb: 4
        }}
      >
        {t("uploadReviewsTitle")}
      </Typography>


      <UploadCard />


      <Box
        sx={{
          mt: 4
        }}
      >
        <BranchSelector />
      </Box>


      <Box
        sx={{
          mt: 4
        }}
      >
        <AnalysisSelector />
      </Box>


      <Box
        sx={{
          mt: 4
        }}
      >
        <UploadButton />
      </Box>


    </Box>
  );
}
