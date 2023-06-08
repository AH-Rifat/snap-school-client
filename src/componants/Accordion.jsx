import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";

export default function SimpleAccordion() {
  return (
    <Container sx={{ marginBottom: "6rem" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Q1: What courses do you offer at your photography learning school?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At our photography learning school, we offer a wide range of courses
            to cater to different skill levels and interests. From beginner
            courses covering the fundamentals of photography to specialized
            workshops in portrait photography, landscape photography, studio
            lighting, and more, we have something for everyone.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            Q2: Who are the instructors at your photography learning school?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our photography learning school takes pride in having experienced
            and passionate instructors who are experts in their respective
            fields. Our instructors have extensive knowledge and practical
            experience in various genres of photography, ensuring that students
            receive high-quality instruction and guidance throughout their
            learning journey.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            Q3: Do I need any prior experience or specific camera equipment to
            enroll in your courses?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No prior experience is required to enroll in our courses. We welcome
            photography enthusiasts of all levels, whether you`re a complete
            beginner or have some prior knowledge. Regarding camera equipment,
            while it`s beneficial to have a DSLR or mirrorless camera, our
            courses focus on teaching fundamental photography techniques that
            can be applied to any type of camera, including smartphones.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            Q4: Can I expect hands-on learning and practical assignments in your
            courses?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! We believe that practical experience is crucial in
            developing photography skills. Our courses emphasize hands-on
            learning, allowing students to apply the concepts they learn in
            real-world scenarios. You can expect practical assignments, photo
            walks, and interactive exercises that will enhance your
            understanding and help you develop your photographic eye.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            Q5: What support or resources do you provide to students outside of
            the classroom?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are committed to supporting our students throughout their
            photography journey. In addition to the classroom instruction, we
            provide access to a variety of resources such as online forums,
            recommended reading materials, and curated photography resources.
            Our instructors are also available for guidance and feedback,
            ensuring that students receive continued support even after the
            course completion.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
