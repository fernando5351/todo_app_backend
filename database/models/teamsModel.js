const {Model, DataTypes} = require('sequelize');

const TEAMS_TABLES = 'teams';

const teamsModel = {
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    }     
}

class Teams extends Model {
    static associate (models){
        this.hasMany(models.Board, {
            as: 'Boards',
            foreignKey: 'idTeam'
        });
    }

    static config(sequelize){
        return{
            sequelize,
            modelName: 'Teams',
            tableName: TEAMS_TABLES,
            timestamps: false
        }
    }
}

module.exports = {
    teamsModel,
    TEAMS_TABLES,
    Teams
}