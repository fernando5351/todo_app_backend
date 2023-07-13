const {models} = require ('../../libs/sequelize');

class TeamsService{
    async getAll(){
        const teams= await models.Team.findAll();
        if (!teams || teams.length === 0) {
            return 'no records found'
        } else {
            return teams
        }
    }
}

module.exports = TeamsService