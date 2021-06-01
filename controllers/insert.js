const handleInsert = (db) => (req, res) => {
    const {name, joke, by_user} = req.body;

    if(!name || !joke || !by_user){
        return res.status(400).json('incorrect sumbission');
    }

    db('jokes')
        .returning('*')
        .insert({
            name: name,
            joke: joke,
            by_user: by_user,
            created_at: new Date(),
        })
        .then(joke => res.send({idJoke: joke[0].id}))
        .catch(err => res.status(400).json('Unable to add new joke'))
    //res.send({idJoke: `Joke from ${by_user} added succesfully`})
}

module.exports = {
    handleInsert: handleInsert
};