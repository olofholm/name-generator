import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import { signInWithGoogle } from "../pages/firebase";

export default function ImageNotLoggedIn(props) {
  return (
  <>
    <Paper elevation={8} sx={{height: "min(95vw, 512px)", width: "min(95vw, 512px)"}}>
      <Typography variant="h5" sx={{textAlign: "center"}} m={3}>Please <span style={{backgroundColor: "lightgray"}} onClick={signInWithGoogle}>log in</span> to start generating images</Typography>
    </Paper>  
  </>
  );
}