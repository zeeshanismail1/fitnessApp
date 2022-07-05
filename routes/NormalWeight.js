const express = require('express');
const router = express.Router();
const {
  getNormalWeights,
  postNormalWeight,
  deleteNormalWeight,
  getNormalWeight,
  editNormalWeight,
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
} = require('../controllers/NormalWeight');
router.get('/', getNormalWeights);
router.post('/',  postNormalWeight); 
// apies for admin to apply crud on docter
router.delete('/:id', deleteNormalWeight);
router.get('/:id', getNormalWeight);
router.patch('/:id', editNormalWeight);
router.delete('/:id', deleteNormalWeight);
router.get('/:id/BreakFast',  getBreakFast);
router.post('/:id/BreakFast',  postBreakFast);
router.delete('/:normalWeightId/BreakFast/:BreakFastId', deleteBreakFast)
// router.patch('/BreakFast/:id',  updateBreakFast);
router.get('/:id/Lunch',  getLunch);
router.post('/:id/Lunch',  postLunch);
router.delete('/:normalWeightId/Lunch/:LunchId', deleteLunch)
router.get('/:id/Dinner',  getDinner);
router.post('/:id/Dinner',  postDinner);
router.delete('/:normalWeightId/Dinner/:DinnerId', deleteDinner)
router.get('/:id/Exercise',  getExercise);
router.post('/:id/Exercise',  postExercise);
router.delete('/:normalWeightId/Exercise/:ExerciseId', deleteExercise)
module.exports = router;
