import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Personagem from "./components/Personagem"; 

function App() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      const { data } = res;
      const { results } = data;

      setPersonagens(results);
    });
  }, []);

  return <Personagem personagem={personagens}/>

 
}
export default App;
