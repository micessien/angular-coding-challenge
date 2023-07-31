import React from "react";
import { tokens } from "../../theme";
// MUI Stuff
import useTheme from "@mui/material/styles/useTheme";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const VerifyEmail = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundImage: `url("../../assets/women-famer.jpeg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.grey[500]
              : theme.palette.grey[900],
        }}
      >
        <Box
          sx={{
            margin: "0 auto",
            px: 8,
            py: 10,
            width: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
          boxShadow={8}
        >
          <Typography
            variant="h1"
            sx={{
              color: colors.orangeAccent[600],
              fontWeight: "bold",
            }}
          >
            BIENVENUE SUR RICVA
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.orangeAccent[600],
              fontWeight: 500,
              textAlign: "center",
            }}
            fontSize={25}
            maxWidth="70%"
          >
            Link has been send to your registered email. Please verify it.
          </Typography>

          <Link
            href="/signin"
            variant="body2"
            color={colors.grey[300]}
            sx={{ textDecoration: "none", mt: 3 }}
          >
            Visitez la page de{" "}
            <Typography
              variant="body1"
              component="span"
              color={colors.orangeAccent[300]}
            >
              Connexion
            </Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VerifyEmail;
