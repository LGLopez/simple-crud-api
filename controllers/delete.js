const handleDelete = (db) => (req, res) => {
    const { id } = req.body;
    db('jokes')
        .where('id', id)
        .del()
        .then(() => res.send('Deleted succesfully'))
        .catch((error) => res.status(400).send('Error deleting'))
}

module.exports = {
    handleDelete: handleDelete
}