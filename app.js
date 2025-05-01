const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const session = require('express-session')
const md5 = require('md5');
const bcrypt = require('bcrypt');
const login = require('./login');
const registro = require('./registro');
const { eliminarUsuario, obtenerUsuarios } = require('./usuarios');
const validar = require('./validar');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

app.use(cors({
    origin: process.env.URLFRONTEND || 'http://localhost:5173', 
    credentials: true, 
}))

app.use(session({
    secret: process.env.SECRETSESSION 'oblea'
    proxy: process.env.NODE_ENV === 'production',
    cookie: {
        secure: true,
        sameSite: 'none'
    }
}))


app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

app.get('/login', login);

app.get('/validar', validar);

app.get('/registro', registro);

app.get('/usuarios', obtenerUsuarios);

app.delete('/usuarios', eliminarUsuario);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
