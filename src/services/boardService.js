const { models } = require('../../libs/sequelize');
const boom = require('@hapi/boom');

class BoardService {
    constructor() {}

    async createBoard(data){
        const board = await models.Board.create(data);
        return board;
    }

    async getBoard(){
        const boards = await models.Board.findAll();
        if(!boards || boards.length <= 0) {
            throw boom.notFound('No Boards Found!');
        }
        return boards;
    }

    async getOneABoard(id){
        const board = await models.Board.findByPk(id);
        if (!board ) {
            throw boom.notFound(`Board with id ${id} not found`);
        }
        return board;
    }

    async updateBoard(id, data){
        const board = await this.getOneABoard(id);
        console.log(board);
        const boardUpdated = await board.update(data);
        return boardUpdated;
    }

    async deleteBoard(id) {
        const board = await this.getOneABoard(id);
        await board.destroy();
        return id;
    }
};



module.exports = {
    BoardService
}