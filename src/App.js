import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [ cats, setCats ] = useState([])
  const [ current, setCurrent ] = useState()

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(res => res.json())
      .then(data => setCats(data))
  }, [])

  const handleClick = e => {
    if (current) {
      setCurrent(null)
    } else {
      setCurrent(e.target.id)
    }
  }
  return (
    <>
      <ul>
        {cats.map((cat, index) => {
          return (<li key={index} onClick={handleClick} id={cat.id}> 
            {cat.id}
            {current == cat.id ? <img src={cat.url} />: null}
          </li>
          )
        })}
      </ul>
    </>
  );
}

export default App;
