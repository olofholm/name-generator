import { useUser } from "@auth0/nextjs-auth0/client";
import { Button, Typography } from "@mui/material";
import Header from "../components/header";
import { useState, useEffect } from "react";

export default function Profile () {

    const { user, error, isloading} = useUser();
    const {tokens, setTokens} = useState(0);

    const seeUser = () => {
      console.log(user);
    }

    //If the user is not logged in
    if(!user) {
      return (
        <>
          <Header user={user} title="Profile" />
          <Typography variant="h4" sx={{textAlign: "center"}} mt={5} >Please Log in to view profile</Typography>
          <Typography>{tokens}</Typography>
        </>
      );
    }
    
    //If the user is logged in
    else {
      return (
      <>
        <Header user={user} title="Profile" />
        <Typography variant="h4" sx={{textAlign: "center"}} mt={5} >Welcome {user.nickname}!</Typography>
        <Button onClick={seeUser}>Click</Button>
      </>
      );
    }
}