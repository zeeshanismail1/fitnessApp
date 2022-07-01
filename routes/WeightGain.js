const express = require('express');
const router = express.Router();
const {
  getWeightGains,
  postWeightGains,
  deleteWeightGain,
  getWeightGain,
  editWeightGain,
  getBreakFast,
  postBreakFast,
  deleteBreakFast,
  getLunch,
  postLunch,
  deleteLunch,
  getDinner,
  postDinner,
  deleteDinner,
  getExercise,
  postExercise,
  deleteExercise,
} = require('../controllers/WeightGain');
router.get('/', getWeightGains);
router.post('/',  postWeightGains); 
// apies for admin to apply crud on docter
router.delete('/:id', deleteWeightGain);
router.get('/:id', getWeightGain);
router.patch('/:id', editWeightGain);
router.delete('/:id', deleteWeightGain);
router.get('/:id/BreakFast',  getBreakFast);
router.post('/:id/BreakFast',  postBreakFast);
router.delete('/:weightgainId/BreakFast/:BreakFastId', deleteBreakFast)
// router.patch('/BreakFast/:id',  updateBreakFast);
router.get('/:id/Lunch',  getLunch);
router.post('/:id/Lunch',  postLunch);
router.delete('/:weightgainId/Lunch/:LunchId', deleteLunch)
router.get('/:id/Dinner',  getDinner);
router.post('/:id/Dinner',  postDinner);
router.delete('/:weightgainId/Dinner/:DinnerId', deleteDinner)
router.get('/:id/Exercise',  getExercise);
router.post('/:id/Exercise',  postExercise);
router.delete('/:weightgainId/Exercise/:ExerciseId', deleteExercise)
module.exports = router;
