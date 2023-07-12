const { Role, roleModel } = require('./roleModel');

function modelsSetup(sequelize){
    Role.init(roleModel, Role.config(sequelize));
    
    // associations
    Role.associate(sequelize.models);
}

module.exports = {
    modelsSetup
};