import { DataGrid } from "@mui/x-data-grid";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function TrendTable() {
  const { t, direction, formatNumber } = useLanguage();

  const columns = [
    {
      field: "month",
      headerName: t("month"),
      flex: 1,
    },
    {
      field: "rating",
      headerName: t("averageRating"),
      flex: 1,
    },
  ];

  const rows = [
    { id: 1, month: t("monthJanuary"), rating: formatNumber(3.8) },
    { id: 2, month: t("monthFebruary"), rating: formatNumber(4.0) },
    { id: 3, month: t("monthMarch"), rating: formatNumber(4.1) },
    { id: 4, month: t("monthApril"), rating: formatNumber(4.3) },
    { id: 5, month: t("monthMayFull"), rating: formatNumber(4.4) },
    { id: 6, month: t("monthJuneFull"), rating: formatNumber(4.5) },
  ];

  return (
    <div
      dir={direction}
      style={{
        height: 350,
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[6]}
        disableRowSelectionOnClick
        sx={{
          border: "1px solid #E4D7B8",
          borderRadius: "14px",
          backgroundColor: "#FFFDF8",

          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#F2E7C9",
            color: "#4A3D20",
            fontWeight: 700,
            borderBottom: "1px solid #D8CBAF",
          },

          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 700,
          },

          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #EEE6D5",
            color: "#4A463D",
          },

          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#FBF5E8",
          },

          "& .MuiDataGrid-footerContainer": {
            borderTop: "1px solid #E4D7B8",
            backgroundColor: "#FFFDF8",
          },

          "& .MuiTablePagination-root": {
            color: "#5F5748",
          },
        }}
      />
    </div>
  );
}
