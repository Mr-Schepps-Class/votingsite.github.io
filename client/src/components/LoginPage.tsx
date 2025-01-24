import httpClient from "../httpClient";
import React from "react"


function LoginPage(){
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const logInUser = async() => {

        try{
            const resp = await httpClient.post("http://127.0.0.1:5000/login", {
                email,
                password,
            });

            window.location.href = "/";
        } 
        catch (e : any) {
            //console.log(e.message);

            //kinda hacky solution here
            if(e.message == "Request failed with status code 401"){
                alert("Invalid Credentials");
            }
            
        }
    };

    return(
        <div>
            <form>
                <div>
                    <label>Email: </label>
                    <input
                        type = "text"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password: </label>
                    <input
                        type = "text"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type = "button" onClick={() => logInUser()}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default LoginPage;