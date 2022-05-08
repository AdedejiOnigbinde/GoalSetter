const express = require('express')
const router = express.Router()
const { getGoals, setGoal, deleteGoal, updateGoal } = require('../controller/goalContoller')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router