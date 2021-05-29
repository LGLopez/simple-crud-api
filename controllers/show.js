const handleShow = (db) => (req, res) => {
    db.select('id','name', 'joke', 'by_user', 'created_at')
        .from('jokes')
        .then(jokes => {
            res.send(jokes)
        })
        .catch(err => {
            res.status(400).send('No se pudo recuperar los datos')
        })
}

module.exports = {
    handleShow:  handleShow
}