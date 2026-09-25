import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'
import './App.css'

function Inicio() {
  return <h1>Inicio</h1>
}

function Coleccion() {
  return <h1>Colección</h1>
}

function Favoritos() {
  return <h1>Favoritos</h1>
}

function Info() {
  return <h1>Info</h1>
}

function Usuario() {
  return <h1>Usuarios</h1>
}

function Pokemon() {
  const { name } = useParams()
  return <h1>Pokemon: {name}</h1>
}

function App() {
  return (
    <Router>
      <nav className='c-menu'>
        <Link to='/'>Inicio</Link>
        <Link to='/coleccion'>Coleccion</Link>
        <Link to='/favoritos'>Favoritos</Link>
        <Link to='/info'>Info</Link>
        <Link to='/usuario'>Usuarios</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/coleccion' element={<Coleccion />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/info' element={<Info />} />
        <Route path='/usuario' element={<Usuario />} />
        <Route path='/pokemon/:name' element={<Pokemon />} />
      </Routes>
    </Router>
  )
}

export default App