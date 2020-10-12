const notificationsController = require('express').Router();

const { JWTVerifier } = require('../../lib/passport');
const db = require('../../models');

notificationsController.get('/all', JWTVerifier, (req, res) => {
    db.Notifications.findAll({})
        .then(notifications => res.json(notifications))
        .catch(err => res.json(err));
});

notificationsController.post('/create', JWTVerifier, (req, res) => {
    const image = 'https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png';
    const { message, atTime } = req.body;
    db.Notifications.create({ image, message, atTime })
        .then(notifications => res.json(notifications))
        .catch(err => res.json(err));
});


module.exports = notificationsController;