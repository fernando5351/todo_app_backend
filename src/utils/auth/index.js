const { jwtStrategy } = require('./strategies/strategyJWT');
const localStrategy = require('./strategies/strategyLocal');
const passport = require('passport');

passport.use(localStrategy);
passport.use(jwtStrategy);
