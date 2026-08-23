import { DataGrid } from "@mui/x-data-grid";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function BranchTable() {
  const { t, direction, formatNumber } = useLanguage();

  const columns = [
    {
      field: "branch",
      headerName: t("branch"),
      flex: 1,
    },
    {
      field: "reviews",
      headerName: t("reviews"),
      flex: 1,
    },
    {
      field: "rating",
      headerName: t("rating"),
      flex: 1,
    },
    {
      field: "positive",
      headerName: t("positiveReviews"),
      flex: 1,
    },
  ];

  const rows = [
    {
      id: 1,
      branch: t("nasr"),
      reviews: formatNumber(4200),
      rating: formatNumber(4.6),
      positive: formatNumber("88%"),
    },
    {
      id: 2,
      branch: t("maadi"),
      reviews: formatNumber(3100),
      rating: formatNumber(4.2),
      positive: formatNumber("79%"),
    },
    {
      id: 3,
      branch: t("dokki"),
      reviews: formatNumber(2900),
      rating: formatNumber(3.8),
      positive: formatNumber("68%"),
    },
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
        pageSizeOptions={[5]}
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

          "& .MuiDataGrid-selectedRowCount": {
            color: "#C9A227",
          },
        }}
      />
    </div>
  );
}
