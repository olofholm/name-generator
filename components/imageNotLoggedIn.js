import { Paper, Typography } from "@mui/material";

export default function ImageNotLoggedIn(props) {
  return (
  <>
    <Paper elevation={8} sx={{height: "min(95vw, 512px)", width: "min(95vw, 512px)"}}>
      <Typography variant="h5" sx={{textAlign: "center"}} m={3}>Please <span style={{backgroundColor: "lightgrey"}}><a href="/api/auth/login">log in</a></span> and verify email to start generating images</Typography>
    </Paper>  
  </>
  );
}