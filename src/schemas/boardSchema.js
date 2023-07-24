const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string();
const description = Joi.string();
const status = Joi.boolean();
const idTeam = Joi.number().integer();
const idUser =Joi.number().integer();
const expiresIn = Joi.date();

const createBoard = Joi.object({
    title: title.required(),
    description,
    status,
    idTeam: idTeam.required(),
    idUser: idUser.required(),
    expiresIn
});

const updateBoard = Joi.object({
    title,
    description,
    status,
    idTeam,
    idUser,
    expiresIn
});

const getBoard = Joi.object({
    id: id.required()
});

module.exports = {
    createBoard,
    updateBoard,
    getBoard
}