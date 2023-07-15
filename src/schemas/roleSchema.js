const Joi = require ('joi');

const id  = Joi.number().integer();
const name = Joi.string().min(3).max(255);
const status = Joi.boolean()

const createRole = Joi.object({
     name: name.required(),
     status: status.required()
})

const updateRole = Joi.object({
    name: name,
    status: status
})

module.exports = {
    createRole,
    updateRole  
}