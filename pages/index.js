import Head from "next/head";
import { useState } from "react";
import { TextField, Typography, Container, Button, ThemeProvider, GlobalStyles, CircularProgress, Paper } from "@mui/material";
import Header from "./components/header";
import theme from "../styles/theme";

export default function Home() {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();
  const [result3, setResult3] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [loadingImage, setLoadingImage] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setLoadingImage(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: descriptionInput }),
      });

      const data = await response.json();

      //Check if response is good
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      let names = data.result.split(',');
      
      setResult1(names[0]);
      setResult2(names[1]);
      setResult3(names[2]);

      setDescriptionInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }

    try {
      const response = await fetch("/api/generateImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: descriptionInput }),
      });

      const data = await response.json();
      setLoadingImage(false);

      //Check if response is good
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setImageUrl(data.result);

    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { backgroundColor: "#fefce8" }}}/>
      <Head>
        <title>Name Generator</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </Head>

      <Header/>

      <Container maxWidth="sm" sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h4" mb={3} mt={6}>Name My Character</Typography>
        <form onSubmit={onSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <TextField id="outlined-basic" label="Description" variant="outlined" sx={{ width: "400px"}}
            type="text"
            name="description"
            placeholder="Character Description (e.g. 'A powerful warlock')"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
          <br/>
          <Button variant="contained" type="submit" value="Generate Names">Create</Button>
        </form>
        <Typography variant="h5" mt={2}>{result1}</Typography>
        <Typography variant="h5" mt={1}>{result2}</Typography>
        <Typography variant="h5" mt={1} mb={2}>{result3}</Typography>
          {loadingImage ? (<CircularProgress />) : (<Paper elevation={8} sx={{height: "254px", width: "254px"}}><img src={imageUrl} style={{borderRadius: "5px"}}></img></Paper>)}
      </Container>
    </ThemeProvider>
  );
}