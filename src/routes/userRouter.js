const router = require('express').Router();
const validatorHandler = require('../../middlewares/validatorHandler');
const UserService = require('../services/userService');
const { createUser, updateUser } = require('../schemas/userSchema');

const service = new UserService();

router.post('/register', 
    validatorHandler(createUser, 'body'),
    async(req, res, next)=> {
        try {
            const data = req.body;
            const user = await service.createUser(data);
            res.status(201).json({
                codeStatus: 201,
                message:  'user created',
                data: user
            })
        } catch (error) {
            next(error);
        }
    }
);

router.get('/',
    async (req, res, next) => {
        try {
            const users = await service.getAll();
            res.status(200).json({
                codeStatus: 200,
                message:'success get all users',
                data: users
            })
        } catch (error) {
            next(error)
        }
    }
);

router.get('/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await service.getOne(id);
            res.status(302).json({
                codeStatus: 302,
                message:'success get a user',
                data: user
            })
        } catch (error) {
            next(error)
        }
    }
);

router.patch('/:id',
    validatorHandler(updateUser, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await service.update(id, req.body);
            res.status(202).json({
                codeStatus: 202,
                message:'user updated',
                data: user
            })
        } catch (error) {
            next(error)
        }
    }
);

router.delete('/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await service.delete(id);
            res.status(202).json({
                codeStatus: 202,
                message:'user deleted',
                data: user
            })
        } catch (error) {
            next(error)
        }
    }
);

module.exports = router;