import { Paper, Typography } from "@mui/material";

export default function ImageNotLoggedIn(props) {
  return (
  <>
    <Paper elevation={8} sx={{height: "min(95vw, 512px)", width: "min(95vw, 512px)"}}>
      <Typography variant="h5" sx={{textAlign: "center"}} mt={3}>Please log in to generate a image</Typography>
    </Paper>  
  </>
  );
}