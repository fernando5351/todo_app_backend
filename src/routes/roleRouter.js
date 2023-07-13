const router = require('express').Router();

const RoleService = require('../services/roleService');

const service = new RoleService();

router.get('/', 
    async(req, res, next)=> {
        try {
            const roles = await service.getAll();
            return res.status(200).json({
                codeStatus: 200,
                message:  'all roles fetched',
                data: roles
            })
        } catch (error) {
            next(error);
            console.log(error);
        }
    }
);

router.post('/',
);

module.exports = router;