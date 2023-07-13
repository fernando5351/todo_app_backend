const {  Strategy, ExtractJwt } = require('passport-jwt');
const config = require('../../../../config');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}

const jwtStrategy = new Strategy(options, (payload, done)=>{
    if (!payload) {
        done('no token provided', false);
    }
    return done(null, payload);
});

module.exports = {
    jwtStrategy
}