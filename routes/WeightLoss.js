const express = require('express');
const router = express.Router();
const {
  getAllWeightLoss,
  postWeightLoss,
  deleteWeightLoss,
  getWeightLoss,
  editWeightLoss,
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
} = require('../controllers/WeightLoss');
router.get('/', getAllWeightLoss);
router.post('/',  postWeightLoss); 
// apies for admin to apply crud on docter
router.delete('/:id', deleteWeightLoss);
router.get('/:id', getWeightLoss);
router.patch('/:id', editWeightLoss);
router.delete('/:id', deleteWeightLoss);
router.get('/:id/BreakFast',  getBreakFast);
router.post('/:id/BreakFast',  postBreakFast);
router.delete('/:weightlossId/BreakFast/:BreakFastId', deleteBreakFast)
// router.patch('/BreakFast/:id',  updateBreakFast);
router.get('/:id/Lunch',  getLunch);
router.post('/:id/Lunch',  postLunch);
router.delete('/:weightlossId/Lunch/:LunchId', deleteLunch)
router.get('/:id/Dinner',  getDinner);
router.post('/:id/Dinner',  postDinner);
router.delete('/:weightlossId/Dinner/:DinnerId', deleteDinner)
router.get('/:id/Exercise',  getExercise);
router.post('/:id/Exercise',  postExercise);
router.delete('/:weightlossId/Exercise/:ExerciseId', deleteExercise)
module.exports = router;
