const Joi = require('joi');

const id = Joi.number().integer();
const  name = Joi.string().min(3).max(100)

const createTeam = Joi.object({
    name:name.required()
})

const updateTeam = Joi.object({
    name: name
})

module.exports = {
    createTeam,
    updateTeam
}