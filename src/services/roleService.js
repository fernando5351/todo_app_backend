const { models } = require('../../libs/sequelize');

class RoleService {
    async getAll() {
        const roles = await models.Role.findAll();
        if (!roles || roles.length === 0) {
            return 'no records found'
        } else {
            return roles;
        }
    }
}

module.exports = RoleService;