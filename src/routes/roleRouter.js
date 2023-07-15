const router = require('express').Router();
const {updateRole,createRole} = require('../schemas/roleSchema')
const validatorHandler = require('../../middlewares/validatorHandler');
const RoleService = require('../services/roleService');
const roles = new RoleService();

router.get('/', 
    async(req, res, next)=> {
        try {
            const role = await roles.getAll();
            return res.status(302).json({
                codeStatus: 302,
                message:  'all roles fetched',
                data: role
            })
        } catch (error) {
            next(error);
            console.log(error);
        }
    }
);

router.get('/:id',async(req,res,next)=>{
    try {
        const {id} = req.params;
        const role = await roles.getOne(id);
        res.status(302).json({
            status: 302,
            message:"successfully get one role",
            data : role
        })
    } catch (error) {
        next(error)
    }
    
})

router.post('/',
    validatorHandler(createRole,'body'),
    async(req,res,next)=>{
        try {
            const data = req.body;
            const role = await roles.Create(data)
            res.status(201).json({
                status: 201,
                message:'success create a user!',
                data:role
            })
        } catch (error) {
            next(error)
        }
    }
);

router.patch('/:id', 
    validatorHandler(updateRole,'body'),
    async(req,res,next)=>{
       try {
        const {id} = req.params;
        const role = await roles.Update(id, req.body)
        res.status(200).json({
            status: 200,
            message: 'role updated',
            data: role
        })
       } catch (error) {
            next(error)
       }
    }
)

router.delete('/:id',async(req,res,next)=>{
    try {
        const {id} = req.params;
        const role = await roles.delete(id);
        res.status(202).json({
            status: 202,
            message: 'has been deleted',
            data: role
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router;