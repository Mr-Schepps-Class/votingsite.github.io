import httpClient from "../httpClient";
import React from "react"


function RegisterPage(){
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const registerUser = async () => {
        try {
            const resp = await httpClient.post("http://127.0.0.1:5000/register", {
                email,
                password,
            });

        window.location.href = "/";
        } 
        catch (e : any) {
            //console.log(e.message);

            //kinda hacky solution here
        
            if(e.message == "Request failed with status code 409"){
                alert("This user already exists");
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

                <button type = "button" onClick={() => registerUser()}>
                    Submit
                </button>
            </form>
        </div>
    )

}

export default RegisterPage;