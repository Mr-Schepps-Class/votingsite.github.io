import httpClient from "../httpClient";
import React from "react";
import DetectMobile from "./DetectMobile";
import ViewPass from "./ViewPass";

function RegisterPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const fieldwidths = DetectMobile() ? 100 : 50;
  const inputmargins = DetectMobile() ? 1 : 2;
  const paddingwrap = DetectMobile() ? 3 : 5;
  const paddingwrapY = DetectMobile() ? 1 : 3;
  const columnsize = DetectMobile() ? 10 : 6;

  const registerUser = async () => {
    try {
      const resp = await httpClient.post("http://127.0.0.1:5000/register", {
        email,
        password,
      });

      window.location.href = "/";
    } catch (e: any) {
      //console.log(e.message);

      //kinda hacky solution here

      if (e.message == "Request failed with status code 409") {
        alert("This user already exists");
      }
    }
  };

  const validateEmail = (email : string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e : any) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col"></div>
            <div
              className={`col-${columnsize} coloredlogin px-${paddingwrap} py-${paddingwrapY}`}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div
                  className={`col-centered input-group my-4 px-${inputmargins}`}
                >
                  
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    className="form-control btn btn-secondary p-3"
                    id="bluefield"
                    placeholder="Email"
                  />
                </div>
                <div
                  className={`col-centered input-group my-4 px-${inputmargins}`}
                >
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control btn btn-secondary p-3"
                    id="bluefield2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <b className="basic-text">
                  View Password
                  <input
                    type="checkbox"
                    onClick={ViewPass}
                    className="mx-2 "
                  ></input>
                </b>

                <p>{!isValid ? "Please Enter a valid email" : ""}</p>
                
                

                <div className="input-group my-4 px-2">
                  <button
                    type="submit"
                    disabled={!isValid}
                    onClick={() => registerUser()}
                    className={`mt-4 btn w-${fieldwidths} col-centered p-3`}
                    id="bluefieldbtn"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
