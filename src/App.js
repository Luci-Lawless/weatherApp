import React from 'react';
import ReactDOM from 'react-dom';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "cbb0c8e55a81546274e3c6c76faa48cc";

class App extends React.Component {

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return(
      <div className="app">
        <Titles />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App;
