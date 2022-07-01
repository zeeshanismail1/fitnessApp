const WeightGain = require("../models/WeightGain");
const { StatusCodes } = require("http-status-codes");                                      
const getWeightGains = async (req, res) => {
  const weightgain = await WeightGain.find({});

  return res.status(StatusCodes.OK).json({ weightgain });
};
const postWeightGains = async (req, res) => {
  const weightgain = await WeightGain.create(req.body);
  return res.status(StatusCodes.CREATED).json({ weightgain });
};
// delete WeightGaine
const deleteWeightGain = async (req, res) => {
  const { id } = req.params;
  const weightgain = await WeightGain.findByIdAndDelete(id);
  return res.status(StatusCodes.OK).json({ weightgain });
};

const getWeightGain = async (req, res) => {
  const weightgain = await WeightGain.findById(req.params.id);
  return res.status(StatusCodes.OK).json({ weightgain });
};
const editWeightGain = async (req, res) => {
  const weightgain = await WeightGain.findByIdAndUpdate(req.params.id, req.body);
  return res.status(StatusCodes.OK).json({ weightgain });
};
// Breakfast
const getBreakFast = async (req, res) => {
  const { id } = req.params;
  const weightgain = await WeightGain.findById(id);
  const BreakFast = weightgain.BreakFast;
  res.status(StatusCodes.OK).json({ BreakFast });
};
const postBreakFast = async (req, res) => {
  const { id } = req.params;
  const weightgain = await WeightGain.findByIdAndUpdate(id, {
    $push: { BreakFast: req.body },
  });
  res.status(StatusCodes.CREATED).json({ weightgain });
};
const deleteBreakFast = async (req, res) => {
  const { weightgainId, BreakFastId } = req.params;
  const weightgain = await WeightGain.findByIdAndUpdate(weightgainId, {
    $pull: { BreakFast: {_id:BreakFastId} },
  });
  res.status(StatusCodes.OK).json({ weightgain });
};
//Lunch
const getLunch = async (req, res) => {
  const { id } = req.params;
  const weightgain = await WeightGain.findById(id);
  const Lunch = weightgain.Lunch;
  res.status(StatusCodes.OK).json({ Lunch });
};
const postLunch = async (req, res) => {
  const { id } = req.params;
  const weightgain = await WeightGain.findByIdAndUpdate(id, {
    $push: { Lunch: req.body },
  });
  res.status(StatusCodes.CREATED).json({ weightgain });
};
const deleteLunch = async (req, res) => {
  const { weightgainId, LunchId } = req.params;
  const weightgain = await WeightGain.findByIdAndUpdate(weightgainId, {
    $pull: { Lunch: {_id:LunchId} },
  });
  res.status(StatusCodes.OK).json({ weightgain });
};
// Dinner
const getDinner = async (req, res) => {
  const { id } = req.params;
  const weightgain = await WeightGain.findById(id);
  const Dinner = weightgain.Dinner;
  res.status(StatusCodes.OK).json({ Dinner });
};
const postDinner = async (req, res) => {
  const { id } = req.params;
  const weightgain = await WeightGain.findByIdAndUpdate(id, {
    $push: { Dinner: req.body },
  });
  res.status(StatusCodes.CREATED).json({ weightgain });
};
const deleteDinner = async (req, res) => {
  const { weightgainId, DinnerId } = req.params;
  const weightgain = await WeightGain.findByIdAndUpdate(weightgainId, {
    $pull: { Dinner: {_id:DinnerId} },
  });
  res.status(StatusCodes.OK).json({ weightgain });
};
//Exercise
const getExercise = async (req, res) => {
  const { id } = req.params;
  const weightgain = await WeightGain.findById(id);
  const Exercise = weightgain.Exercise;
  res.status(StatusCodes.OK).json({ Exercise });
};
const postExercise = async (req, res) => {
  const { id } = req.params;
  const weightgain = await WeightGain.findByIdAndUpdate(id, {
    $push: { Exercise: req.body },
  });
  res.status(StatusCodes.CREATED).json({ weightgain });
};
const deleteExercise = async (req, res) => {
  const { weightgainId, ExerciseId } = req.params;
  const weightgain = await WeightGain.findByIdAndUpdate(weightgainId, {
    $pull: { Exercise: {_id:ExerciseId} },
  });
  res.status(StatusCodes.OK).json({ weightgain });
};

module.exports = {
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
};
