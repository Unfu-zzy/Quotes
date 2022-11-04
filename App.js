import './App.css'
import {useState, useEffect} from "react"

export default function App() {
  const [quotes, setQuotes] = useState('quotes');
  const [render, setRender] = useState(0);

  useEffect( () => {
    const getData = async () => {
    const url = (
      `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
    )
      const res = await fetch(url);
      const json = await res.json();
      const randomQuote = json.quotes[Math.round(Math.random() * json.quotes.length)].quote;
      setQuotes(randomQuote);
    }

    getData();
  }, [render]);

  return (
    <div className="container">
      <div className="quote">
        <h2>{quotes}</h2>
      </div>
        <button onClick={() => setRender(Math.random()) }>New Quote</button>
    </div>
  )
}

