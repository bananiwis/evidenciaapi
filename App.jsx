import { useEffect, useState } from 'react'

import './App.css'
import Base from './base.jsx' 
import Usuarios from './Usuarios.jsx'
import Registro from './registro.jsx'

function App() {
  //hooks
  const [usuario, setUsuario] = useState('') 
  const [clave, setClave] = useState('') 
  const [logueado, setLogueado] = useState(false)
  const [recargar, setRecargar] = useState(false)

  

  //Funciones
  function cambiarUsuario(event) {
    setUsuario(event.target.value);
  }

  function cambiarClave(event) {
    setClave(event.target.value);
  }

  function recargarPagina() {
    setRecargar(!recargar)
  }

  // Verifica para ingresar al dar click en el botón
  async function ingresar() { 
    const peticion = await fetch('http://localhost:3000/login?usuario=' + usuario + '&clave=' + clave, { credentials: 'include'})
    
    if (peticion.ok) {
      setLogueado(true) 
    
      alert('Sesión iniciada')
     } else {
        alert('Datos incorrectos. Intente nuevamente.')
      }
    }

   
  
    
    async function validar() {const peticion = await fetch('http://localhost:3000/validar', { credentials: 'include'})
    if (peticion.ok) {
      setLogueado(true)
 
     }
    }

    
useEffect(() => {
  validar()
}, [])

    if (logueado) {
      return (
      <>
    
      <Base />
      <Registro recargarPagina ={recargarPagina}/>
      <Usuarios recargar = {recargar}/>
      
     </>)}
    
    return (
      <>
       <h1>Inicio de sesión</h1>
        <label htmlFor="usuario">Usuario: 
        <input placeholder='usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>
        </label>
        <label htmlFor="clave">Contraseña: 
        <input placeholder='clave' type="password" id='clave' value={clave} onChange={cambiarClave}/>
        </label>
        <button type='button' onClick={ingresar}>Ingresar</button>
      </>)
}

export default App
