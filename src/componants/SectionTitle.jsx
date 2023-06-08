import { Divider, Typography } from "@mui/material";

const SectionTitle = ({title}) => {
  return (
    <>
      <Divider sx={{ margin: "4rem 0", width:'100%' }}>
        <Typography variant="h4" color={"#2196f3"} >
          {title}
        </Typography>
      </Divider>
    </>
  );
};

export default SectionTitle;
