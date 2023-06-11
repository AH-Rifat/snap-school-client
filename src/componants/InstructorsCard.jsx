import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const InstructorsCard = (info) => {
  const { name, email, photoUrl } = info.info;

  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          textAlign: "center",
          marginBottom: "6rem",
          borderRadius: "1rem",
        }}
      >
        <CardActionArea>
          <Avatar
            alt="Remy Sharp"
            src={photoUrl}
            sx={{ width: 150, height: 150, marginTop: "2rem", marginX: "auto" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2">{email}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default InstructorsCard;
