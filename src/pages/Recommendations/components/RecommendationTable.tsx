import { DataGrid } from "@mui/x-data-grid";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function RecommendationTable() {
  const { t, direction } = useLanguage();

  const columns = [
    {
      field: "recommendation",
      headerName: t("recommendation"),
      flex: 2,
    },
    {
      field: "priority",
      headerName: t("priority"),
      flex: 1,
    },
    {
      field: "status",
      headerName: t("status"),
      flex: 1,
    },
  ];

  const rows = [
    {
      id: 1,
      recommendation: t("improveFoodQuality"),
      priority: t("high"),
      status: t("pending"),
    },
    {
      id: 2,
      recommendation: t("reduceDeliveryTime"),
      priority: t("high"),
      status: t("inProgress"),
    },
    {
      id: 3,
      recommendation: t("trainCustomerService"),
      priority: t("medium"),
      status: t("pending"),
    },
    {
      id: 4,
      recommendation: t("reviewPricing"),
      priority: t("low"),
      status: t("completed"),
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
