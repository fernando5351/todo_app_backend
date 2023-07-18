const { Sequelize, Model, DataTypes } = require('sequelize');
const { ROLE_TABLE } = require('./roleModel');

const USER_TABLE = 'users';

const UserModel = {
    id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	email: {
		allowNull: false,
		unique: true,
		type: DataTypes.STRING,
	},
	password: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	idRole: {
		allowNull: false,
		type: DataTypes.INTEGER,
		field: 'id_role',
		unique: false,
		references: {
			model: ROLE_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'NO ACTION',
	},
	verification: {
		allowNull: false,
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	verificationCode: {
		allowNull: false,
		type: DataTypes.STRING,
		field: 'verification_code',
	},
	createAt: {
		allowNull: false,
		type: DataTypes.DATE,
		field: 'create_at',
		defaultValue: Sequelize.NOW,
	},
	status: {
		allowNull: false,
		type: DataTypes.BOOLEAN,
		defaultValue: true,
		field: 'status',
	},
}

class User extends Model {
    static associate(models) {
		this.belongsTo(models.Role, { 
			as: 'Role',
			foreignKey: 'idRole'
		});
    };

    static config(sequelize){
        return{
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    };
}

module.exports = {
    USER_TABLE,
    UserModel,
    User
};
