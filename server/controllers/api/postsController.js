const postsController = require('express').Router();
const { JWTVerifier } = require('../../lib/passport');
const db = require('../../models');

//create a post
postsController.post('/create', (req, res) => {
    const { title, content, time, date, link, SubjectId, UserId } = req.body;

    db.Post.create({ title, content, time, date, link, SubjectId, UserId })
        .then(post => {
            let Pusher = require('pusher');
            let pusher = new Pusher({
                appId: process.env.PUSHER_APP_ID,
                key: process.env.PUSHER_APP_KEY,
                secret: process.env.PUSHER_APP_SECRET,
                cluster: process.env.PUSHER_APP_CLUSTER
            });
            pusher.trigger('notifications', 'post_added', post, req.headers['x-socket-id']);
            res.json(post);
        })
        .catch(err => res.json(err));
});

//get all posts
postsController.get("/all", (req, res) => {
    db.Post.findAll({})
        .then(result => {
            res.json(result);
        });
});

//get post(s) by subjectId
postsController.get("/subject/:subjectId", (req, res) => {
    db.Post.findAll({
        include: [{
            model: db.Subject,
            where: { id: req.params.subjectId }
        }]
    }).then(result => {
        res.json(result);
    });
});

postsController.get("/signup/attendees", (req, res) => {
    db.Post.findAll({
        include: 'attendees'
    })
        .then(result => {
            res.json(result);
        })
});

// get UserIds associated with PostId
postsController.get("/signup/get/:id", JWTVerifier, (req, res) => {
    db.Post.findByPk(req.params.id)
        .then(result => {
            if (!result) {
                return res.sendStatus(404);
            }
            return result.getAttendees();
        })
        .then(data => {
            let usernameArr = [];
            data.forEach(e => {
                usernameArr.push(e.username);
            });
            return usernameArr;
        })
        .then(data => {
            console.log(data)
            res.json(data);
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        })
});

//new user signup to post
postsController.post("/signup/add", (req, res) => {
    console.log(req.body);
    db.Post.findOne({
        where: { id: req.body.id }
    })
        .then(result => {
            console.log(result);
            return Promise.all([
                result.addAttendee(req.body.UserId)
            ])
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        });
});

//remove user from signup to post
postsController.delete("/signup/remove", JWTVerifier, (req, res) => {
    console.log(req.body);
    db.Post.findOne({
        where: { id: req.body.id }
    })
        .then(result => {
            console.log(result);
            return Promise.all([
                result.removeAttendee(req.body.UserId)
            ])
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        });
});

postsController.delete("/user-post/remove", JWTVerifier, (req, res) => {
    db.Post.findOne({
        where: { UserId: req.user.id }
    }).then(result => {
        res.json(result);
    })
})

module.exports = postsController;
