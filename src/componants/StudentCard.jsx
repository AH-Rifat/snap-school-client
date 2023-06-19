import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const StudentCard = (info) => {
    const { imageUrl, name, comment, } = info.info

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt="student-image"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {comment}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{ marginTop: '1.5rem' }}>
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default StudentCard;