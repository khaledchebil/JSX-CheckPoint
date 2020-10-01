import React from 'react';
// import logo from './logo.svg';
import './App.css';
import pic1 from './asset/pic1.jpg';
import './style.css';

function App() {
  return (
    <div className="App">

<div style={{border:'solid 1px black',maxWidth:'100vw'}}>
<h1 className="title red">Anything Here</h1>
<img src="./images/pic2.jpg" alt="this is "  width="320" height="240" />
<img src={pic1} alt='this is an 2' width="320" height="240" className="secpic"/>
</div>

<video width="320" height="240" controls>
<source src="./video/movie.mp4" type="video/mp4" />
</video>
    </div>
  );
}

export default App;
