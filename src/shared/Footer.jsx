import { Box, Container, Typography } from "@mui/material";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 100,
          backgroundColor: "primary.dark",
          display: { md: "flex" },
        }}
        alignItems="center"
        // justifyContent={"space-between"}
      >
        <Container
          sx={{
            display: { md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <CastForEducationIcon
              sx={{
                marginRight: "10px",
                marginTop: "1.5rem",
              }}
            />
            <Typography variant="h5" sx={{ marginTop: "1.5rem" }}>
              SnapSchool
            </Typography>
          </Box>

          <Box
            sx={{ marginTop: "1.5rem", display: { md: "flex" }, gap: "1rem" }}
          >
            <Typography variant="p">Home</Typography>
            <Typography variant="p">Classes</Typography>
            <Typography variant="p">Instructors</Typography>
            <Typography variant="p">Contact us</Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
