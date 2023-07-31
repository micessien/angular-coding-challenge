import React from "react";
import { tokens } from "../../theme";
// MUI Stuff
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// Components
import Header from "../../components/Header";
// Data
import { mockDataEntrepots } from "../../data/mockData";

const Entrepots = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "libelle", headerName: "Libelle", flex: 1 },
    {
      field: "superficie",
      headerName: "Superfice M™",
      type: "number",
      headerAlign: "left",
      align: "left",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "placer",
      headerName: "Placer",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="ENTREPOTS"
        subtitle="Historique d'entrepots"
        isLink={true}
        linkText={"Creer un entrepot"}
        to={"/create-entrepot"}
      />
      <Box
        m="40px 0 0 0"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: colors.orangeAccent[300] },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.orangeAccent[800],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.orangeAccent[800],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.orangeAccent[800]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataEntrepots}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Entrepots;
