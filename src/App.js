import { useState } from 'react';
import './App.css';
import imagenRickMorty from './img/rick-morty.png';
import Characters from './components/Character';


function App() {
  const [characters, setCharacters] = useState(null);

  const redApi =  async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character/'); 
    const characterApi = await api.json();
    setCharacters(characterApi.results)
  }

  console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imagenRickMorty} alt="Rick & Morty" className="img-home"/>
            <button onClick={redApi} className="btn-search">Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
