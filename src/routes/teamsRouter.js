const router = require('express').Router();
const validatorHandler = require('../../middlewares/validatorHandler')
const TeamsService = require ('../services/teamsService');
const Team = new TeamsService()
const {createTeam,updateTeam} = require ('../schemas/teamsSchcema')


router.get('/',
    async (req,res,next)=>{
        try {
            const teams = await Team.getAll();
            res.status(200).json({
                codeStatus: 200,
                message: 'success get all teams',
                data: teams
            })
        } catch (error) {
            next(error)
        }
    }
)

router.get('/:id',async(req,res,next)=>{
    try {
        const {id} = req.params;
        const teams = await Team.getOne(id);
        res.status(302).json({
            codeStatus: 302,
            message:'success get a team ',
            data : teams
        })
    } catch (error) {
        next(error)
    }
})

router.post('/',
async(req,res,next)=>{
    try {
        const data = req.body;
        const teams = await Team.Create(data);
        res.status(201).json({
            codeStatus: 201,
            message: 'Team create',
            data: teams
        })
    } catch (error) {
        next(error)
    }
}

);

router.patch('/:id',async(req,res,next)=>{
    validatorHandler(updateTeam,'body');
    try {
        const {id} = req.params        
        const teams = await Team.update(id, req.body)
        res.status(202).json({
            codeStatus: 202,
            message:'team updated successfully!',
            data:teams
        })
    } catch (error) {
        next(error)
    }
});

router.delete('/:id',async(req,res,next)=>{
    try {
        const {id} = req.params;
        const teams = await Team.delete(id);
        res.status(202).json({
            codeStatus : 202,
            message: 'team deletes',
            data: teams
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router
