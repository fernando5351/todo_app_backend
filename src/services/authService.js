const jwt = require('jsonwebtoken');
const config = require('../../config');

class Auth {
    async signToken(user) {
        console.log(user);
        const payload = {
            id: user.id,
            sub: user.email,
            role: 'admin'
        }
        const token = await jwt.sign(payload, config.jwtSecret, { expiresIn: '7 days' });
        return {
            user,
            token
        }
    }
}

module.exports = Auth;