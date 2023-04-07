import { CircularProgress, Paper, Box } from "@mui/material";

export default function GeneratedImage(props) {
  return (
  <>
    {props.loadingImage ?
      (<Box sx={{height: 512}}><CircularProgress /></Box>) : 
        (<Paper elevation={8} sx={{height: "min(95vw, 512px)", width: "min(95vw, 512px)"}}>
          <img src={props.imageUrl} style={{borderRadius: "5px", width: "min(95vw, 512px)", height: "min(95vw, 512px)"}}>
          </img>
        </Paper>)
      }  
  </>
  );
}