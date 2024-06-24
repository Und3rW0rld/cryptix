import './App.css'
import Eventos from './views/Eventos'
import Home from './views/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta para el formulario de inicio de sesión */}
        <Route path="/Eventos" element={<Eventos />} /> {/* Ruta para el resto de la aplicación */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
