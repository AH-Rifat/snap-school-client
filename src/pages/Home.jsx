import HomeSlider from "../componants/HomeSlider";
import SectionTitle from "../componants/SectionTitle";
import HomeSlider2 from "../componants/HomeSlider2";
import SimpleAccordion from "../componants/Accordion";
import HomeClassesCard from "../componants/HomeClassesCard";
import TestimonialSection from "../componants/TestimonialSection";
import ContactSection from "../componants/ContactSection";
import BenefitsSection from "../componants/BenefitsSection";

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

      {/* Testimonials */}
      <SectionTitle title={"Testimonials"} />
      <TestimonialSection />

      {/* Course Benefits */}
      <SectionTitle title={"Course Benefits"} />
      <BenefitsSection />

      {/* Popular Classes */}
      <SectionTitle title={"FQA"} />
      <SimpleAccordion />

      {/* contact-us section */}
      <SectionTitle title={"Contact Us"} />
      <ContactSection />
    </>
  );
};

export default Home;
