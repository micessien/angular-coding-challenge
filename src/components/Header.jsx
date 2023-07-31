import React from "react";
import { tokens } from "../theme";
import { Link } from "react-router-dom";
// MUI Stuff
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Header = ({
  title,
  subtitle,
  isLink = false,
  to = null,
  linkText = null,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px" display="flex" justifyContent="space-between">
      <Box>
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          {title}
        </Typography>
        <Typography variant="h5" color={colors.orangeAccent[400]}>
          {subtitle}
        </Typography>
      </Box>
      {isLink && (
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to={to}
          sx={{ height: "40px", marginTop: "1%" }}
        >
          {linkText}
        </Button>
      )}
    </Box>
  );
};

export default Header;
