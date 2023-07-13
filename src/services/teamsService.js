const {models} = require ('../../libs/sequelize');
const boom = require('@hapi/boom')

class TeamsService{
    async getAll(){
        const teams= await models.Teams.findAll();
        if (!teams || teams.length === 0) {
            throw boom.notFound('Team not found')
        } else {
            return teams
        }
    }

    async Create(data){
        const teams = await models.Teams.create(data);
        return teams
    }

    async getOne(id){
        const teams = await models.Teams.findByPk(id);
        if (!teams) {
            throw boom.notFound('Team not found')
        }
        return teams
    }

    async update(id,data){
        const teams  = await this.getOne(id);
        const teamsUpdate = await teams.update(data);
        return teamsUpdate;
    }

    async delete(id){
        const teams = await this.getOne(id)
        await teams.destroy();
        return id;
    }
}

module.exports = TeamsService