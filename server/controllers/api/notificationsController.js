const notificationsController = require('express').Router();

// const { BelongsTo, BelongsToMany } = require('sequelize/types');
const { JWTVerifier } = require('../../lib/passport');
const db = require('../../models');

notificationsController.get('/all', JWTVerifier, (req, res) => {
    db.Notifications.findAll({})
        .then(notifications => res.json(notifications))
        .catch(err => res.json(err));
});

notificationsController.get('/user-subjects', JWTVerifier, (req, res) => {
    db.User.findAll({
        where: { id: req.user.id },
        include: [{
            model: db.Subject,
            through: 'user_subject'
        }]
    })
        .then(notifications => res.json(notifications))
        .catch(err => res.json(err));
});

notificationsController.post('/create', JWTVerifier, (req, res) => {
    const image = 'https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png';
    const { message, atTime, SubjectId } = req.body;
    db.Notifications.create({ image, message, atTime, SubjectId })
        .then(notifications => res.json(notifications))
        .catch(err => res.json(err));
});

notificationsController.get('/user-notifs/:id', JWTVerifier, (req, res) => {
    db.User.findAll({
        where: { id: req.user.id },
        include: [{
            model: db.Subject,
            through: 'user_subject',
            attributes: ['id']
        },
        {
            model: db.Notifications,
            where: { SubjectId: req.params.id }
        }
        ]
    })
        .then(result => {
            res.json(result);
        }).catch(err => res.json(err));
});

module.exports = notificationsController;