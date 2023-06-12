import HomeSlider from "../componants/HomeSlider";
import SectionTitle from "../componants/SectionTitle";
import HomeSlider2 from "../componants/HomeSlider2";
import SimpleAccordion from "../componants/Accordion";
import HomeClassesCard from "../componants/HomeClassesCard";

const Home = () => {
  return (
    <>
      <HomeSlider />
      {/* Popular Classes */}
      <SectionTitle title={"Our Popular Classes"} />
      <HomeClassesCard />

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
