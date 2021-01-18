import React, { useEffect ,Component} from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://api.github.com/organizations').then(d => d.json()).then((d) => {
      console.log(d)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
