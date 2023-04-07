import { Typography, Box } from "@mui/material";

export default function Footer () {
    return (
      <Box sx={{ flexGrow: 1, backgroundColor: "#4d7c0f" }} mt={4}>
        <Typography sx={{ flexGrow: 1, color: "white", textAlign: "center" }} ml={2}>
          Please contact <span style={{backgroundColor: "darkgreen"}}>support@world-generator.com</span> for support. This webpage is still in development.
        </Typography>
      </Box>
    );
}
