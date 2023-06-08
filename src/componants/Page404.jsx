import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <Box justifyContent={"center"} display={"flex"}>
      <img
        src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740&t=st=1686164227~exp=1686164827~hmac=44424d13f825ddba5ad8e61cd897609d6b02f88eba201e5aadd105c9b8537142"
        alt="404Image"
      />

      <Link
        to={"/"}
        style={{
          textDecoration: "none",
          textAlign: "center",
          position: "absolute",
          top: 50,
        }}
      >
        <Button
          variant="contained"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Back To Home
        </Button>
      </Link>
    </Box>
  );
};

export default Page404;
