const WeightLoss = require("../models/WeightLoss");
const { StatusCodes } = require("http-status-codes");                                      
const getAllWeightLoss = async (req, res) => {
  const weightloss = await WeightLoss.find({});

  return res.status(StatusCodes.OK).json({ weightloss });
};
const postWeightLoss = async (req, res) => {
  const weightloss = await WeightLoss.create(req.body);
  return res.status(StatusCodes.CREATED).json({ weightloss });
};
// delete WeightLoss
const deleteWeightLoss = async (req, res) => {
  const { id } = req.params;
  const weightloss = await WeightLoss.findByIdAndDelete(id);
  return res.status(StatusCodes.OK).json({ weightloss });
};

const getWeightLoss = async (req, res) => {
  const weightloss = await WeightLoss.findById(req.params.id);
  return res.status(StatusCodes.OK).json({ weightloss });
};
const editWeightLoss = async (req, res) => {
  const weightloss = await WeightLoss.findByIdAndUpdate(req.params.id, req.body);
  return res.status(StatusCodes.OK).json({ weightloss });
};
// Breakfast
const getBreakFast = async (req, res) => {
  const { id } = req.params;
  const weightloss = await WeightLoss.findById(id);
  const BreakFast = weightloss.BreakFast;
  res.status(StatusCodes.OK).json({ BreakFast });
};
const postBreakFast = async (req, res) => {
  const { id } = req.params;
  const weightloss = await WeightLoss.findByIdAndUpdate(id, {
    $push: { BreakFast: req.body },
  });
  res.status(StatusCodes.CREATED).json({ weightloss });
};
const deleteBreakFast = async (req, res) => {
  const { weightlossId, BreakFastId } = req.params;
  const weightloss = await WeightLoss.findByIdAndUpdate(weightlossId, {
    $pull: { BreakFast: {_id:BreakFastId} },
  });
  res.status(StatusCodes.OK).json({ weightloss });
};
//Lunch
const getLunch = async (req, res) => {
  const { id } = req.params;
  const weightloss = await WeightLoss.findById(id);
  const Lunch = weightloss.Lunch;
  res.status(StatusCodes.OK).json({ Lunch });
};
const postLunch = async (req, res) => {
  const { id } = req.params;
  const weightloss = await WeightLoss.findByIdAndUpdate(id, {
    $push: { Lunch: req.body },
  });
  res.status(StatusCodes.CREATED).json({ weightloss });
};
const deleteLunch = async (req, res) => {
  const { weightlossId, LunchId } = req.params;
  const weightloss = await WeightLoss.findByIdAndUpdate(weightlossId, {
    $pull: { Lunch: {_id:LunchId} },
  });
  res.status(StatusCodes.OK).json({ weightloss });
};
// Dinner
const getDinner = async (req, res) => {
  const { id } = req.params;
  const weightloss = await WeightLoss.findById(id);
  const Dinner = weightloss.Dinner;
  res.status(StatusCodes.OK).json({ Dinner });
};
const postDinner = async (req, res) => {
  const { id } = req.params;
  const weightloss = await WeightLoss.findByIdAndUpdate(id, {
    $push: { Dinner: req.body },
  });
  res.status(StatusCodes.CREATED).json({ weightloss });
};
const deleteDinner = async (req, res) => {
  const { weightlossId, DinnerId } = req.params;
  const weightloss = await WeightLoss.findByIdAndUpdate(weightlossId, {
    $pull: { Dinner: {_id:DinnerId} },
  });
  res.status(StatusCodes.OK).json({ weightloss });
};
//Exercise
const getExercise = async (req, res) => {
  const { id } = req.params;
  const weightloss = await WeightLoss.findById(id);
  const Exercise = weightloss.Exercise;
  res.status(StatusCodes.OK).json({ Exercise });
};
const postExercise = async (req, res) => {
  const { id } = req.params;
  const weightloss = await WeightLoss.findByIdAndUpdate(id, {
    $push: { Exercise: req.body },
  });
  res.status(StatusCodes.CREATED).json({ weightloss });
};
const deleteExercise = async (req, res) => {
  const { weightlossId, ExerciseId } = req.params;
  const weightloss = await WeightLoss.findByIdAndUpdate(weightlossId, {
    $pull: { Exercise: {_id:ExerciseId} },
  });
  res.status(StatusCodes.OK).json({ weightloss });
};

module.exports = {
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
};
