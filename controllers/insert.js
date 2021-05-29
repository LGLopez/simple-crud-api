const handleInsert = (db) => (req, res) => {
    const {name, joke, by_user} = req.body;
    db('jokes')
        .insert({
            name: name,
            joke: joke,
            by_user: by_user,
            created_at: new Date(),
        })
        .then(joke => res.json(joke[0]))
        .catch(err => res.status(400).json('Unable to add new joke'))
    res.send(`Joke from ${by_user} added succesfully`)
}

module.exports = {
    handleInsert: handleInsert
};