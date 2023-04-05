import Head from "next/head";
import { useState } from "react";
import { TextField, Typography, Container, Button, CircularProgress, Paper, GlobalStyles } from "@mui/material";
import Header from "./components/header";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();
  const [result3, setResult3] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [loadingImage, setLoadingImage] = useState(false);
  
  const { user, error, isloading} = useUser();
  console.log(user);

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
      <>
      <GlobalStyles styles={{ body: { backgroundColor: "#fefce8" }}}/>
      <Head>
        <title>Name Generator</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </Head>

      <Header/>

      <Container maxWidth="sm" sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography mt={1} sx={{textAlign: "center"}}>Welcome to this name and image generator powered by AI.<br/>
        Enter a brief description and it will generate 3 names and one image based on your description. </Typography>
        <Typography variant="h5" mb={1} mt={3} sx={{fontWeight: "bold", textAlign: "center"}}>Start now by typing a description!</Typography>
        <form onSubmit={onSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <TextField id="outlined-basic" label="Description" variant="outlined" sx={{ width: "min(75vw, 400px)"}}
            type="text"
            name="description"
            placeholder="Character Description (e.g. 'Evil wizard')"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
          <br/>
          <Button variant="contained" type="submit" value="Generate Names">Create</Button>
        </form>
        <Typography variant="h5" mt={2}><span style={{backgroundColor: "lightgrey"}}>{result1}</span></Typography>
        <Typography variant="h5"><span style={{backgroundColor: "lightgrey"}}>{result2}</span></Typography>
        <Typography variant="h5" mb={1}><span style={{backgroundColor: "lightgrey"}}>{result3}</span></Typography>
          {loadingImage ? (<CircularProgress />) : (<Paper elevation={8} sx={{height: "min(95vw, 512px)", width: "min(95vw, 512px)"}}><img src={imageUrl} style={{borderRadius: "5px", width: "min(95vw, 512px)", height: "min(95vw, 512px)"}}></img></Paper>)}
      </Container>
    </>
  );
}