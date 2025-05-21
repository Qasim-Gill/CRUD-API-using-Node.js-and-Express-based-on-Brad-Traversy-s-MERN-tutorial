const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalsController');

// router.get('/', getGoals);

// router.post('/', setGoal);

// router.put('/:id', updateGoal);

// router.delete('/:id', deleteGoal);

// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').delete(deleteGoal).put(updateGoal)


const { protect } = require('../middlewares/authMiddleware')
router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router;