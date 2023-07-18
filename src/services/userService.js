const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../../libs/sequelize');
const MailService = require('./mailService');

const service = new MailService();

class UserService {

    async createUser(data) {
        const hash = await bcrypt.hash(data.password, 10);
        const code = await service.generateCode();
        const values = {
            ...data,
            password: hash,
            verificationCode: code
        }
        console.log(values);
        const user = await models.User.create(values);
        await service.sendMail(user.dataValues.email, 'Codigo de verificacion', `tu codigo es: ${code}`);
        return user;
    }

    async getAll(){
        const users = await models.User.findAll();
        if (!users || users.length === 0) {
            throw boom.notFound('no records found');
        }
        return users;
    }

    async getOne(id) {
        const user = await models.User.findByPk(id, {
            include: ['Role']
        });
        if(!user) {
            throw boom.notFound('no record found');
        }
        return user;
    }

    async getEmail() {
        const email = await models.User.findAll({
            attributes: ['email'],
        })
        return email;
    }

    async findByEmail(email) {
        const user = await models.User.findOne({
            include: ['Role'],
            where :{ email }
        });
        return user;
    }

    async update(id, data) {
        const user = await this.getOne(id);
        await user.update(data);
        const userUpdated = await this.getOne(id);
        delete userUpdated.dataValues.password;
        return userUpdated;
    }

    async delete(id) {
        const user = await this.getOne(id);
        await user.destroy();
        return id;
    }
}

module.exports = UserService;