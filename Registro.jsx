import { useEffect, useState } from 'react'
import './App.css'

function Registro({ recargarPagina }) { // Desestructurar correctamente las props
  //hooks
  const [usuarioRegistro, setUsuarioRegistro] = useState('') 
  const [claveRegistro, setClaveRegistro] = useState('') 

  function cambiarUsuarioRegistro(event) {
    setUsuarioRegistro(event.target.value);
  }

  function cambiarClaveRegistro(event) {
    setClaveRegistro(event.target.value);
  }

  async function registrar() { 
    const peticion = await fetch('http://localhost:3000/registro?usuario=' + usuarioRegistro + '&clave=' + claveRegistro, { credentials: 'include'})
    
    if (peticion.ok) {
      alert('Usuario registrado')
      recargarPagina() // Llamar correctamente la función
    } else {
      alert('Usuario no registrado')
    }
  }

  useEffect(() => {}, [])

  return (
    <>
      <h1>Registro</h1>
      <label htmlFor="usuario">Usuario: 
        <input placeholder='usuario' type="text" name="usuario" id="usuario" value={usuarioRegistro} onChange={cambiarUsuarioRegistro}/>
      </label>
      <label htmlFor="clave">Contraseña: 
        <input placeholder='clave' type="password" id='clave' value={claveRegistro} onChange={cambiarClaveRegistro}/>
      </label>
      <button type='button' onClick={registrar}>Registrar</button>
    </>
  )
}

export default Registro