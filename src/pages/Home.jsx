import { Container, Grid } from "@mui/material";
import HomeSlider from "../componants/HomeSlider";
import SectionTitle from "../componants/SectionTitle";
import HomeSlider2 from "../componants/HomeSlider2";
import SimpleAccordion from "../componants/Accordion";
import ClassesCard from "../componants/ClassesCard";

const Home = () => {
  return (
    <>
      <HomeSlider />
      {/* Popular Classes */}
      <SectionTitle title={"Our Popular Classes"} />
      <Container>
        <Grid container spacing={4} style={{ margin: "auto -1rem" }}>
          <Grid item xs={12} md={4}>
            <ClassesCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ClassesCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ClassesCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ClassesCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ClassesCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ClassesCard />
          </Grid>
        </Grid>
      </Container>

      {/* Popular Instructors */}
      <SectionTitle title={"Our Popular Instructors"} />
      <HomeSlider2 />

      {/* Popular Classes */}
      <SectionTitle title={"FQA"} />
      <SimpleAccordion />
    </>
  );
};

export default Home;
