import { Container, Typography, Grid } from "@mui/material";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";



const contactInfoStyles = {
  marginBottom: "1rem",
};

// eslint-disable-next-line react/prop-types
const Footer = ({ isDarkMode }) => {
  const footerStyles = {
    backgroundColor: isDarkMode ? "#1e1e1e" : "#025ab9",
    color: "#fff",
    padding: "2rem",
  };

  return (
    <footer style={footerStyles}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{justifyContent:'space-between', marginLeft:'.10rem'}} >
          {/* Add your logo or website name */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="div" display="flex" alignItems="center">
              <CastForEducationIcon
                sx={{ marginRight: "10px", display: { xs: "none", md: "flex" } }}
              />
              SnapSchool
            </Typography>
          </Grid>
          {/* Add your contact information */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="body2"
              component="div"
              style={contactInfoStyles}
            >
              Email: info@gmail.com<br />
              Phone: (123) 456-7890<br />
              Address: 1234 Main Street, City, Country
            </Typography>
          </Grid>
        </Grid>
        {/* Add copyright information */}
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} SnapSchool. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
