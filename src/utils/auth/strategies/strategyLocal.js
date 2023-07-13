const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const UserService = require('../../../services/userService');

const service = new UserService();

const localStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password',
}, async(email, password, done)=> {
    const user = await service.findByEmail(email);
    if (!user) {
        return done(boom.unauthorized('user not alowed'));
    }
    const pass = await bcrypt.compare(password, user.dataValues.password);
    if(!pass){
        return done(boom.unauthorized('user not alowed'))
    }
    return done(null, user);
});

module.exports = localStrategy;