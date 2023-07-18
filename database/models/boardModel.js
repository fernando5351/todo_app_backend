    const { Sequelize, Model, DataTypes } = require('sequelize');

const { TEAMS_TABLES } = require('./teamsModel');
const { USER_TABLE } = require('./userModel');

const BOARD_TABLE = 'board';

const boardModel = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
    idTeam: {
        field: 'id_team',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: TEAMS_TABLES,
            key: 'id'
        },
        onDelete:'NO ACTION',
        onUpdate:'CASCADE'
    },
    idUser: {
        field: 'id_user',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onDelete:'NO ACTION',
        onUpdate:'CASCADE'
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    expiresIn: {
        type: DataTypes.DATE,
        allowNull: true
    }
}

class Board extends Model {
    static associate(models) {
        console.log(models);
        this.belongsTo(models.Teams, {
            as: 'Team',
            foreignKey: 'idTeam'
        });
        this.belongsTo(models.User, {
            as: 'User',
            foreignKey: 'idUser'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Board',
            tableName: BOARD_TABLE,
            timestamps: false,
        }
    }
}

module.exports = {
    BOARD_TABLE,
    boardModel,
    Board
}