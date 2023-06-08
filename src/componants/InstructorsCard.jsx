import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const InstructorsCard = () => {
  return (
    <>
      <Card sx={{ maxWidth: 300, textAlign: "center", marginBottom: "6rem" }}>
        <CardActionArea>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 130, height: 130, margin: "1rem auto" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lecturer
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default InstructorsCard;
