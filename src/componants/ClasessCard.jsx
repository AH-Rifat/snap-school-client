import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ClasessCard = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Introduction to Photography
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Basic camera handling and operation. Understanding exposure
              (aperture, shutter speed, ISO). Composition techniques and
              framing. Introduction to different types of photography (portrait,
              landscape, still life, etc.). Essential photography equipment and
              accessories
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ClasessCard;
