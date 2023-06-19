import { Typography, TextField, Button, Grid, Container, Box } from '@mui/material';

const ContactSection = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic here
    };

    return (
        <Container>
            <Box sx={{ width: { xs: 340, md: 540 }, marginX: 'auto', marginBottom: '6rem' }}>
                <section id="contact-us">
                    <Typography variant="body1" gutterBottom sx={{ marginBottom: '3rem' }}>
                        If you have any questions or inquiries, please feel free to reach out to us. We`re here to help!
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField label="Name" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Email" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Subject" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" type="submit" color="primary">
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </section>
            </Box>
        </Container>
    );
};

export default ContactSection;