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
        allowNull: false,
        defaultValue: 'true',
    }
}

class Role extends Model {
    static associate(models){
        this.hasMany(models.User, {
            as: 'Users',
            foreignKey: 'idRole'
        });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: ROLE_TABLE,
            modelName: 'Role',
            timestamps: false
        }
    }
}

module.exports = {
    roleModel,
    ROLE_TABLE,
    Role
}
