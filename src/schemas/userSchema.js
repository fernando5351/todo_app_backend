const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(100);
const email = Joi.string().email();
const password = Joi.string().min(8).max(16);
const role = Joi.string();

const createUser = Joi.object({
    name: name.required(),
    email: email.required(),
    password: password.required(),
    role: role.required()
});

const updateUser = Joi.object({
    name: name,
    email: email,
    password: password,
    role: role
});

module.exports = {
    createUser,
    updateUser
};