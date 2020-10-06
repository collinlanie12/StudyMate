const apiControllers = require('express').Router();


apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/posts', require('./postsController'));
apiControllers.use('/subjects', require('./subjectsController'));


module.exports = apiControllers;
