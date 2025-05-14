import React, {useState} from "react";
import RatingScale from "../components/RatingScale";
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";
import httpClient from "../httpClient";


const DisplaySite = () => {
  const location = useLocation();
  const [Val, setVal] = useState(0.1);
  const [user, setUser] = React.useState("");
  const url = location.state?.link;
  const email = user.email;

  React.useEffect(() => {
      (async () => {
        try {
          const resp = await httpClient.get("http://127.0.0.1:5000/@me");
          setUser(resp.data);
        } catch (error) {
          console.log("Not authenticated");
          setUser("none");
        } 
      })();
    }, []);

  const vote = async () => {
    try {
      const response = await httpClient.post("http://127.0.0.1:5000/vote", {
          Val,
          email,
          url,
      });

      alert('Thank You for voting')



      
    } catch (error : any) {
      console.error("Error getting voting: ", error);
      alert(error.message);
    }
  };


  return (
    
    <>
      
      {location.state.link != null ? (
        <RatingScale
          siteURL={location.state.link}
          siteName={location.state.title}
          setVal = {setVal}
        />
      ) : (
        <NotFound />
      )}

      <button onClick = {() => vote()} className = "Button">Vote</button>

      


      
    </>

    


  );
};

export default DisplaySite;
