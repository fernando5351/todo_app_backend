const router = require('express').Router();
const validatorHandler = require('../../middlewares/validatorHandler');
const { createBoard, updateBoard, getBoard } = require('../schemas/boardSchema');
const { BoardService} = require('../services/boardService');

const services = new BoardService;

router.get('/',
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

module.exports = router;