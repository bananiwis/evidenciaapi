const validar = (req, res) => {
    if (req.session.usuario) {
        res.status(200).send('Sesión válida')
    } else {
        res.status(401).send('Sesión no válida')
    }
}

module.exports = validar