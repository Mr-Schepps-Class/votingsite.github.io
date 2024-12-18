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
        <>

            <div className="App">
                <title>Web Portal - Home Page</title>
                <Header/>
                <h1>Web Portal</h1>
                <h1>File Upload Example</h1>
                <FileUpload />
                <RandomComponent text="wow cool using props amazing splendid spectacular stuff here man"/>

            </div>
        </>
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
                <ul className='header-list'>
                    <li className='header-item'><a className='header-link' href="/"><strong>WEB PORTAL</strong></a></li>
                    <li className='header-item'><a className='header-link' href="/">Gallery</a></li>
                    <li className='header-item'><a className='header-link' href="/">Login/Signup</a></li>
                    <li className='header-item' id="upload-item"><a id='upload-link' className='header-link' href="/">Upload Project</a></li>
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
