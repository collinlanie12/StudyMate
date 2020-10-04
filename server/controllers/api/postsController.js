const postsController = require('express').Router();

const db = require('../../models');

postsController.post('/main', (req, res) => {
    const { title, content, time } = req.body;

    db.Post.create({ title, content, time })
        .then(post => res.json(post))
        .catch(err => res.json(err));
});

module.exports = postsController;