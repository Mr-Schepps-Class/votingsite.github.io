import React from 'react';
import FileUpload from './FileUpload';
import './App.css';


function App() {
    return (


        <Home/>
    );
}
function Home() {
    return (


        <div className="App">
            <title>Web Portal - Home Page</title>
            <Header/>
            <h1>Web Portal</h1>
            <h1>File Upload Example</h1>
            <FileUpload />
            <RandomComponent text="wow cool using props amazing splendid spectacular stuff here man"/>

        </div>
    );
}


function BasicButton() {
    return (
      <button className="button-basic" >Basic Button Text</button>
    );
  }

function Header() {
    return (
      <header className="header-default" >
            <nav>
                <ul>
                    <li><a href="/">Web Portal</a></li>
                    <li><a href="/">Gallery</a></li>
                    <li><a href="/">Login/Signup</a></li>
                    <li><a href="/">Upload Project</a></li>
                </ul>
            </nav>
      </header>
    );
}

  function RandomComponent(props) {
    return (

        <div>
            <BasicButton />
            <p>{props.text}</p>
        </div>

    );
  }


export default App;
