const handleDelete = (db) => (req, res) => {
    const { id } = req.body;
    db('jokes')
        .where('id', id)
        .del()
        .then(() => res.json({result: id}))
        .catch((error) => res.status(400).json({result: 'Error deleting'}))
}

module.exports = {
    handleDelete: handleDelete
}