const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(100);
const email = Joi.string().email();
const password = Joi.string().min(8).max(16);
const idRole = Joi.number().integer();
const verificationCode = Joi.string();

const createUser = Joi.object({
    name: name.required(),
    email: email.required(),
    password: password.required(),
    idRole: idRole.required(),
    verificationCode: verificationCode
});

const updateUser = Joi.object({
    name: name,
    email: email,
    password: password,
    idRole: idRole
});

const login = Joi.object({
    email: email.required(),
    password: password.required()
});

const recovery = Joi.object({
    email: email.required()
});

const getUser = Joi.object({
    id: id.required()
});

module.exports = {
    createUser,
    updateUser,
    login,
    recovery,
    getUser
};