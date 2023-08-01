import React from "react";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
// MUI Stuff
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
// Components
import Header from "../../components/Header";
import BasicAlert from "../global/BasicAlert";
// Actions
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const initialValues = {
  libelle: "",
  superficie: "",
  placer: "",
  longitude: "",
  latitude: "",
};

// Validation
const userSchema = yup.object().shape({
  libelle: yup.string().required("required"),
  superficie: yup.number().required("required").positive(),
  placer: yup.string().required("required"),
  longitude: yup.number().required("required").integer(),
  latitude: yup.number().required("required").integer(),
});

const CreateEntrepot = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [loading, setLoading] = React.useState(false);
  const [successMg, setSuccessMg] = React.useState(null);

  const handleFormSubmit = async (values) => {
    // console.log(values);
    setLoading(true);

    try {
      await addDoc(collection(db, "entrepots"), {
        libelle: values.libelle,
        superficie: values.superficie,
        placer: values.placer,
        latitude: values.latitude,
        longitude: values.longitude,
        timeStamp: serverTimestamp(),
      });
      setLoading(false);
      setSuccessMg("Entrepôts ajoutés avec succès!");
    } catch (error) {
      alert("Something went wrong! ", error);
      setLoading(false);
    }
  };

  return (
    <Box m="20px">
      <Header title="CREER UN ENTREPOT" subtitle="Creer un nouvel entrepot" />

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
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Libelle"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.libelle}
                name="libelle"
                error={!!touched.libelle && !!errors.libelle}
                helperText={touched.libelle && errors.libelle}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Superficie (m2)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.superficie}
                name="superficie"
                error={!!touched.superficie && !!errors.superficie}
                helperText={touched.superficie && errors.superficie}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Placer"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.placer}
                name="placer"
                error={!!touched.placer && !!errors.placer}
                helperText={touched.placer && errors.placer}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Longitude"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.longitude}
                name="longitude"
                error={!!touched.longitude && !!errors.longitude}
                helperText={touched.longitude && errors.longitude}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Latitude"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.latitude}
                name="latitude"
                error={!!touched.latitude && !!errors.latitude}
                helperText={touched.latitude && errors.latitude}
                sx={{ gridColumn: "span 2" }}
              />

              {successMg && <BasicAlert type="success" message={successMg} />}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <LoadingButton
                type="submit"
                loading={loading}
                color="secondary"
                sx={{
                  backgroundColor: colors.orangeAccent[500],
                  "&:hover": { backgroundColor: colors.orangeAccent[400] },
                }}
                variant="contained"
              >
                Creer un nouvel entrepot
              </LoadingButton>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateEntrepot;
