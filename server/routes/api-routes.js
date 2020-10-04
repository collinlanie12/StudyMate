const db = require("../models");
const passport = require("../config/passport");

app.get("/api/post/all", (req, res) => {
    db.post.findAll({
      include: [{
        model: db.subject,
        required: true,
      }, {
        model: db.user,
        required: true,
      }]
    }).then(result => {
      res.json(result);
    });
  });