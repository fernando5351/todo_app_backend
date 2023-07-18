const { models } = require('../../libs/sequelize');
const boom = require('@hapi/boom')

class RoleService {
    async getAll() {
        const roles = await models.Role.findAll();
        if (!roles || roles.length === 0) {
            throw boom.notFound('role not found')
        } else {
            return roles;
        }
    }

    async getOne(id){
        const roles = await models.Role.findByPk(id, {
            include: ['Users']
        })
        if (!roles || roles.length === 0) {
            throw boom.notFound('role not found');
        }else{
            return roles
        }
    }

    async Create(data){
        const roles = await models.Role.create(data);
        return roles;
    }

    async Update(id,data){
        const roles = await this.getOne(id)
        const rolesUpdate = await roles.update(data)
        return rolesUpdate
    }

    async delete(id){
        const roles = await this.getOne(id)
        await roles.destroy()
        return `Role eliminado ${id}`
    }
}


module.exports = RoleService;