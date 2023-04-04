import Head from "next/head";
import { useState } from "react";
import { TextField, Typography, Container, Button, ThemeProvider, GlobalStyles } from "@mui/material";
import Header from "./components/header";
import theme from "./theme";
import { Margin } from "@mui/icons-material";

export default function Home() {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
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

      setResult(data.result);
      setDescriptionInput("");
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
        <title>Name my character</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </Head>

      <Header/>

      <Container maxWidth="sm" sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h4" mb={3} mt={10}>Name My Character</Typography>
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
        <Typography mt={2}>{result}</Typography>
      </Container>
    </ThemeProvider>
  );
}