const router = require('express').Router();
const validatorHandler = require('../../middlewares/validatorHandler');
const { createBoard, updateBoard, getBoard } = require('../schemas/boardSchema');
const { BoardService} = require('../services/boardService');

const services = new BoardService;

router.get('/', validatorHandler(getBoard,'body'),
    async (req, res, next) => {
        try {
            const boards = await services.getBoard();
            res.status(200).json({
                codeStatus: 200,
                message:'all boards fetched successfully',
                data: boards
            })
        } catch (error) {
            next(error);
        }
    }
)

router.post('/', 
validatorHandler(createBoard, 'body'),
    async(req,res,next)=>{
        try {
            const data  = req.body
            const board = await services.createBoard(data)
            res.status(201).json({
                statuscode : 201,
                message :"New board created",
                data: board
            })
        } catch (error) {
            next(error)
        }
    }
)

router.get('/:id', validatorHandler(getBoard, 'body'),
 async(req,res,next)=>{
    try {
        const {id} = req.params;
        const board = await services.getOneABoard(id)
        res.status(302).json({
            statusCode: 302,
            message:"board fetches successfully",
            data: board
        })
    } catch (error) {
        next(error)
    }
})

router.patch('/:id', 
    validatorHandler(updateBoard, 'body'),
    async(req,res,next)=>{
        const {id} = req.params;
        const board = await services.updateBoard(id, req.body)
        res.status(200).json({
            statusCode: 200,
            message:'successfully updated the board ',
            data: board
        })
    }
)

router.delete('/:id',async(req,res,next)=>{
    try {
        const {id} = req.params;
        const board = await services.deleteBoard(id)
        res.status(202).json({
            statusCode: 200,
            message:'board deletes',
            data: board
        })
    } catch (error) {
        next(error)
    }
}
)

module.exports = router;