import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [state, setState] = useState(null);
  const BASE_URL = 'http://3.109.141.224:5000'


  const fetchToken = () => {
   fetch(`${BASE_URL}/api/user-access-token`, {
      method: 'GET'
   }).then(response => response.json()).then(
     (data) => {
       setState(data.token);
      }
    );
  }


  useEffect(() => {
   fetchToken();
  }, []);

  return (
    <div className="App">
      <div>user token : {state} </div>
    </div>
  );
}

export default App;
