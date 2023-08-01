import React, { useEffect } from "react";
import { tokens } from "../../theme";
// MUI Stuff
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// Icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// Components
import Header from "../../components/Header";
import DialogDelete from "../../components/DialogDelete";
// Actions
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Entrepots = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = React.useState(false);
  const [entrepots, setEntrepots] = React.useState([]);
  // console.log("Entrepots----", entrepots);

  const columns = [
    { field: "num", headerName: "ID", flex: 0.5 },
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
    {
      field: "id",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row: { id, libelle } }) => {
        // console.log("ID---", id, libelle);
        return (
          <>
            <DialogDelete
              id={id}
              libelle={libelle}
              setEntrepots={setEntrepots}
              entrepots={entrepots}
            />
            <IconButton aria-label="update" sx={{ ml: 2 }}>
              <ChevronRightIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    const getEntrepots = async () => {
      setLoading(true);
      try {
        let list = [],
          i = 1;
        const querySnapshot = await getDocs(collection(db, "entrepots"));
        querySnapshot.forEach((doc) => {
          list.push({
            num: i++,
            id: doc.id,
            ...doc.data(),
          });
        });
        setEntrepots(list);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        alert("Something went wrong!");
      }
    };

    getEntrepots();
  }, []);

  // Markup loading
  const markupLoading = loading ? (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  ) : null;

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
        {markupLoading}
        <DataGrid
          rows={entrepots}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Entrepots;
