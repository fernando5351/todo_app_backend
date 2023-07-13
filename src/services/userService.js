const { models } = require('../../libs/sequelize');
const boom = require('@hapi/boom');

class UserService {

    async createUser(data) {
        console.log(data);
        const user = await models.User.create(data);
        return user;
    }

    async getAll(){
        const users = await models.User.findAll();
        if (!users || users.length === 0) {
            throw boom.notFound('no records found')
        }
        return users
    }

    async getOne(id) {
        const user = await models.User.findByPk(id);
        if(!user) {
            throw boom.notFound('no record found');
        }
        return user;
    }

    async update(id, data) {
        const user = await this.getOne(id);
        const userUpdated = await user.update(data);
        return userUpdated;
    }

    async delete(id) {
        const user = await this.getOne(id);
        await user.destroy();
        return id;
    }
}

module.exports = UserService;