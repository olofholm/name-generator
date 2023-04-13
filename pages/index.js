import { useState } from "react";
import { TextField, Typography, Container, Button } from "@mui/material";
import Header from "../components/header";
import GeneratedImage from "../components/generatedImage";
import Footer from "../components/footer";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./api/firebase";
import ImageNotLoggedIn from "../components/imageNotLoggedIn";
import axios from "axios";

export default function Home() {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();
  const [result3, setResult3] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [loadingImage, setLoadingImage] = useState(false);

  const [user] = useAuthState(auth);

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

    if(user) {

      const tokenCount = await getTokens();
      console.log(tokenCount);
      if(tokenCount <= 0) {
        alert("No tokens left...");
      }
      else {
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
            console.error(error);
            alert(error.message);
          }
        }
      }
    }

    async function getTokens() {
      try {
        const response = await axios.get(`https://us-central1-world-generator.cloudfunctions.net/readTokens?documentId=${user.uid}`);
        return Number(response.data);
      } catch (error) {
        alert('Function error:', error);
      }
    }
  
  
  return (
    <>
      <Header user={user} title="Name & Image Generator"/>

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

        {result1 ? (<Typography variant="h5" mt={1}><span style={{backgroundColor: "lightgrey"}}>{result1}</span></Typography>) : (<Typography variant="h5" mt={1}><span style={{backgroundColor: "lightgrey"}}>Waiting on input...</span></Typography>)}
        {result2 ? (<Typography variant="h5"><span style={{backgroundColor: "lightgrey"}}>{result2}</span></Typography>) : (<Typography variant="h5"><span style={{backgroundColor: "lightgrey"}}>Waiting on input...</span></Typography>)}
        {result3 ? (<Typography variant="h5" mb={1}><span style={{backgroundColor: "lightgrey"}}>{result3}</span></Typography>) : (<Typography variant="h5" mb={1}><span style={{backgroundColor: "lightgrey"}}>Waiting on input...</span></Typography>)}

        { user ? (<GeneratedImage imageUrl={imageUrl} loadingImage={loadingImage}/>) : (<ImageNotLoggedIn />)}
      </Container>
      <Button onClick={getTokens}>Get Tokens</Button>

      <Footer />
    </>
  );
}