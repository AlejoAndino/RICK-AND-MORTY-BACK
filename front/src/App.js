import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import { Routes, Route, useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom' FORMA DIFERENTE DE OCULTAR EL NAV EN EL LOGIN

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'aleandino.cbaa@gmail.com';
  const password = '123456';
  // const location = useLocation(); FORMA DIFERENTE DE OCULTAR EL NAV EN EL LOGIN

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter(character => character.id !== id))
  }

  return (
    <div className='App' >
      {/* {location.pathname === '/' ? <Form/> : <Nav onSearch={onSearch} /> } FORMA DIFERENTE DE OCULTAR EL NAV EN EL LOGIN*/}
      <Nav onSearch={onSearch} />
      <hr />
      <Routes>
        <Route path='/' element={<Form login={login}/>} />
        <Route exact path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/detail/:detailid' element={<Detail />} />
      </Routes>
      <hr />
    </div>
  )
}

export default App
