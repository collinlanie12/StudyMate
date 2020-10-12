const apiControllers = require('express').Router();


apiControllers.use('/users', require('./usersController'));
apiControllers.use('/posts', require('./postsController'));
apiControllers.use('/subjects', require('./subjectsController'));
apiControllers.use('/notifications', require('./notificationsController'));

module.exports = apiControllers;
