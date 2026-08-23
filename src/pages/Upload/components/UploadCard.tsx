import {
  Card,
  CardContent,
  Typography,
  Box,
  Button
} from "@mui/material";

import { useState } from "react";
import { useLanguage } from "../../../i18n/LanguageContext";


export default function UploadCard() {
  const { t } = useLanguage();

  const [file, setFile] = useState<File | null>(null);


  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }

  };


  const handleAnalyze = () => {

    if (!file) {
      alert(t("pleaseUploadFirst"));
      return;
    }

    alert(`${t("analyzingFile")} ${file.name}`);

  };


  return (

    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
      }}
    >

      <CardContent>


        <Typography
          variant="h5"
          sx={{
            mb: 2
          }}
        >
          {t("uploadReviewsCSV")}
        </Typography>



        <Typography
          color="text.secondary"
          sx={{
            mb: 3
          }}
        >
          {t("dragDropCSV")}
        </Typography>



        <Box
          sx={{
            mb: 3
          }}
        >

          <input
            type="file"
            accept=".csv,.xlsx"
            onChange={handleFileChange}
          />


        </Box>



        {file && (

          <Typography
            sx={{
              mb: 2
            }}
          >

            {t("selectedFile")}: {file.name}

          </Typography>

        )}



        <Button
          variant="contained"
          onClick={handleAnalyze}
          sx={{
            mt: 1
          }}
        >

          {t("analyzeReviews")}

        </Button>


      </CardContent>


    </Card>

  );
}
