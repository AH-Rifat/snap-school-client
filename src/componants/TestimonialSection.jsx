import { Container, Grid } from "@mui/material";
import StudentCard from "./StudentCard";

const data = [
    { id: 1, imageUrl: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', name: 'Matt Lauer', comment: 'I can`t express how much I`ve learned through this online photography school. The instructors are knowledgeable and supportive, and the courses have transformed my skills.' },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1517437235867-ade0f79dfd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=808&q=80', name: 'Val Kilmer', comment: 'Enrolling in this photography school was the best decision I`ve made. The courses pushed me to explore new creative boundaries and helped me build a strong portfolio. Highly recommended!' },
]

const TestimonialSection = () => {
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', gap: '10rem', marginX: { xs: '1.2rem', md: '15rem' } }}>
            <Grid container spacing={4}>
                {
                    data.map(data => {
                        return <Grid key={data.id} item xs={12} md={5}>
                            <StudentCard info={data} />
                        </Grid>
                    })
                }
            </Grid>
        </Container>
    );
};

export default TestimonialSection;