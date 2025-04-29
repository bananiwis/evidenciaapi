const express = require('express')
const app = express()
const port = 3000
// Get the client
const mysql = require('mysql2/promise');
const cors = require('cors')
const session = require('express-session')

app.use(cors({
    origin: 'http://localhost:5173', // Cambia esto a la URL de tu frontend
    credentials: true, // Permite el envío de cookies y encabezados de autorización
}))

app.use(session({
secret: 'oblea'
}))


// Create the connection to database
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'login',
});

app.get('', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/login', async (req, res) => { //req es el objeto de la petición y res es el objeto de la respuesta
    const datos = req.query
    // A simple SELECT query
try {
    const [results, fields] = await connection.query(
      "SELECT * FROM `usuarios` WHERE `usuario` = ? AND `clave` = ?",
        [datos.usuario, datos.clave]
    );
    if (results.length > 0) {
        req.session.usuario = datos.usuario; // Guardar el usuario en la sesión
        res.status(200).send('Sesión iniciada')
    } else {
        res.status(401).send('Usuario o clave incorrectos')
    }
  
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }
   
  })
  app.get('/api/validar', (req, res) => {
    if (req.session.usuario) {
        res.status(200).send('Sesión válida')
    } else {
        res.status(401).send('Sesión no válida')
    }
  })

      

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
