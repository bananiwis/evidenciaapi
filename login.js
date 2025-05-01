const connection = require("./conexion");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const login = async (req, res) => {
  console.log('🟢 Entró a la ruta /login');
    const datos = req.query
    try {
        const [results, fields] = await connection.query(
            "SELECT * FROM `usuarios` WHERE `usuario` = ?",
            [datos.usuario]
        );
        
        console.log(bcrypt.hashSync(datos.clave, saltRounds));
        if (results.length > 0 &&bcrypt.compareSync(datos.clave, results[0].clave)){
            req.session.usuario = datos.usuario;
            res.status(200).send('Sesión iniciada')
        } else {
            res.status(401).send('Usuario o clave incorrectos')
        }
        console.log(results);
        console.log(fields);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error en el servidor')
    }
}

module.exports = login