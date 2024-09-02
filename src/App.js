import './App.css';
import { useState , useEffect} from 'react';
import axios from 'axios';

function App() {

  const [advice, setAdvice] = useState("")
  const [term, setTerm] = useState("")
  const [res, setRes] = useState("")

  const handleTermChange = (event) => setTerm(event.target.value);
  const submitRes = (event) => {
    axios.get('https://api.adviceslip.com/advice/search/${term}')
    .then(response => setRes(response.data.slip.advice))
    .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    axios.get('https://api.adviceslip.com/advice')
      .then(response => setAdvice(response.data.slip.advice))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <main>

      <h1>Evaluación React - Requests</h1>
      <h1>Consejos de vida</h1>

      <div>
        <h2>Obtener un consejo aleatorio</h2>
        <button >Obtener</button>
        <p className="result-box">{advice} holaaaa</p>
      </div>

      <div>
        <h2>Buscar un consejo</h2>
        <input type="text" onChange={handleTermChange} />
        <button>Enviar</button>
        <h3>Resultados de búsqueda:</h3>
        <p className="result-box">{res}</p>
      </div>

    </main>
  );
}

export default App;
