import React from 'react';
import FileUpload from './FileUpload';
import './App.css';


function App() {
    return (
        <div className="App">
            <h1>Test Title</h1>
            <h1>File Upload Example</h1>
            <FileUpload />
            <RandomComponent/>
            
        </div>
    );
}


function BasicButton() {
    return (
      <button className="button-basic" >Basic Button Text</button>
    );
  }

  function RandomComponent() {
    return (

        <div>
            <BasicButton />
            <p>Amazing component!</p>
        </div>

    );
  }


export default App;
