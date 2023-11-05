const express = require('express')
const router = express.Router()

const api_controller = require('../controllers/test.controller')
// const authorize =require('../middlewares/authorize')


router.route('/name').get(api_controller.getall)

router.route('/input/:test').get(api_controller.input)





module.exports = router