const { Role, roleModel } = require('./roleModel');
const { User, UserModel  } = require('./userModel');
const { Teams, teamsModel} = require('./teamsModel');
const { Board, boardModel} = require('./boardModel');

function modelsSetup(sequelize){
    Role.init(roleModel, Role.config(sequelize));
    User.init(UserModel, User.config(sequelize));
    Teams.init(teamsModel, Teams.config(sequelize));
    Board.init(boardModel, Board.config(sequelize));
    
    // associations
    Role.associate(sequelize.models);
    User.associate(sequelize.models);
    Teams.associate(sequelize.models);
    Board.associate(sequelize.models);
}

module.exports = {
    modelsSetup
};