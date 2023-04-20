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
  const [tokens, setTokens] = useState();

  const [user] = useAuthState(auth);

  auth.onAuthStateChanged(function(user) {
    if (user) {
      updateUserTokens();
    } else {
      setTokens(0);
    }
  });

  //When user submits a create request for the AI
  async function onSubmit(event) {
    event.preventDefault();
    setLoadingImage(true);

    //Get the names
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

    //Get Image
    if(user) {

      //Check if user got tokens
      const tokenCount = await getTokens();
      if(tokenCount <= 0) {
        alert("No tokens left...");
      }

      //Call API
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
          await decreaseToken();
          updateUserTokens();

          } catch(error) {
            console.error(error);
            alert(error.message);
          }
        }
      }
    }

  //Call to get the current users token count and returns number of tokens
  async function getTokens() {
    try {
      const response = await axios.get(`https://us-central1-world-generator.cloudfunctions.net/readTokens?documentId=${user.uid}`);
      return Number(response.data);
    } catch (error) {
      console.log('Function error:', error);
    }
  }

  //Call to remove one token from the user
  async function decreaseToken() {
    try {
      const response = await axios.get(`https://us-central1-world-generator.cloudfunctions.net/decreaseTokens?documentId=${user.uid}`);
      return response.data;
    } catch (error) {
      console.log('Function error:', error);
    }
  }

  //Update the user tokens to see the correct
  async function updateUserTokens() {
    const tok = await getTokens();
    setTokens(tok);
  }

  return (
    <>
      <Header user={user} title="Name & Image Generator"/>

      <Container maxWidth="sm" sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography mt={1} sx={{textAlign: "center"}}>Welcome to this name and image generator powered by AI.<br/>
        Enter a brief description and it will generate 3 names and one image based on your description. </Typography>

        <Typography variant="h5" mb={1} mt={3} sx={{fontWeight: "bold", textAlign: "center"}}>Start now by typing a description!</Typography>
        <Typography variant="h6" sx={{fontWeight: "bold"}}>Tokens: {tokens}</Typography>
        <Typography variant="h7" mb={1} sx={{textAlign: "center"}}>Tokens might take a couple of seconds to populate.</Typography>

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

      <Footer />
    </>
  );
}