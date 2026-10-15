import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Inicio from './components/inicio'
import Pokemon from './components/pokemon'
import Favoritos from './components/favoritos'
import Info from './components/info'
import Coleccion from './components/coleccion'

function Usuario() {
  return <h1>Usuarios</h1>
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
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