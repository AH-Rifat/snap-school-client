import benefitsImg from "../../src/assets/courseBenefit.jpg"
import { Box, Typography, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';

const BenefitsSection = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2.5rem',
            }}
        >
            <img src={benefitsImg} alt="" style={{ width: isMobile ? '50%' : '25%', borderRadius: '4rem' }} />
            <Box>
                <Typography sx={{ marginX: { xs: '2.2rem', md: '2.2rem' } }} variant="h6" gutterBottom>
                    Benefits of our Photography Courses:
                </Typography>
                <List sx={{ maxWidth: isMobile ? '100%' : '600px', marginX: '1.4rem' }}>
                    <ListItem>
                        <ListItemText primary="Master technical skills and learn advanced photography techniques." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Develop a unique artistic vision and express your creativity through photography." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Build a professional portfolio that showcases your talent and style." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Receive personalized feedback and guidance from experienced instructors." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Learn from industry professionals and gain insights into the latest trends and practices." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Join a supportive community of photography enthusiasts and network with like-minded individuals." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Flexible learning options to fit your schedule, whether you prefer self-paced or structured learning." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Access to exclusive resources and materials to enhance your learning experience." />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default BenefitsSection;
