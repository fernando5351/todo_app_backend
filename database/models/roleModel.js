const { Model, DataTypes } = require('sequelize');

const ROLE_TABLE = 'roles';

const roleModel = {
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}

class Role extends Model {
    static associate(models){
        this.hasOne(models.User, {
            as: 'user',
            foreignKey: 'idRole'
        })
    }

    static config(sequelize){
        return{
            sequelize,
            modelName: 'Role',
            tableName: ROLE_TABLE,
            timestamps :false
        }
    }
}

module.exports = {
    roleModel,
    ROLE_TABLE,
    Role
}
