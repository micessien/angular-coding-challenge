import React from "react";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
// MUI Stuff
import useTheme from "@mui/material/styles/useTheme";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
// MUI Icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// Components
import Copyright from "../../components/Copyright";

const initialValues = {
  email: "",
  password: "",
};
// Validation
const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const userSchema = yup.object().shape({
  email: yup.string().matches(emailRegExp, "email invalide").required("requis"),
  password: yup
    .string()
    .min(6, "doit comporter au moins 6 caractères")
    .required("requis"),
});

const SignIn = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
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
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#ffffff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              fontWeight: "bold",
            }}
            mt={40}
          >
            BIENVENUE SUR RICVA
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontWeight: 500,
            }}
            fontSize={25}
            maxWidth="70%"
          >
            RICVA est une plateforme de suivi et de gestion du secteur agricole,
            de la production a la vente en passant par le financement.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoComplete="email"
                  autoFocus
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
                <FormControl
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                  autoComplete="current-password"
                  error={!!touched.password && !!errors.password}
                >
                  <InputLabel htmlFor="password">Mot de passe</InputLabel>
                  <OutlinedInput
                    id="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Mot de passe"
                  />
                  {touched.password && (
                    <FormHelperText id="password">
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      href="#"
                      variant="body2"
                      color={colors.grey[300]}
                      sx={{ textDecoration: "none " }}
                    >
                      Vous avez oublier votre mot de passe?{" "}
                      <Typography
                        variant="body1"
                        component="span"
                        color={colors.orangeAccent[300]}
                      >
                        Reinitialiser votre mot de passe
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
