import { Grid, Typography, useMediaQuery } from "@mui/material";

const AboutSection = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={4} style={{ margin: '5rem 0rem' }}
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2.5rem',
      }}
    >
      <Grid item xs={6}>
        <img src="https://images.unsplash.com/photo-1506081328753-b0f6107ba369?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1471" alt="img" width={500} style={{ borderRadius: '20px' }} />
      </Grid>
      <Grid item xs={5}>
        <Typography variant="p" component="div" sx={{ padding: '0px', marginRight: '5rem' }}>
          Our Photography School is a community of passionate photographers, educators, and artists who are committed to providing an enriching and immersive learning experience. With decades of collective experience in both traditional and digital photography, we bring together diverse talents, skills, and backgrounds to offer comprehensive photography education.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutSection;