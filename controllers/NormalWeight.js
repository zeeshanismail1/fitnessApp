const NormalWeight = require("../models/NormalWeight");
const { StatusCodes } = require("http-status-codes");                                      
const getNormalWeights = async (req, res) => {
  const normalWeight = await NormalWeight.find({});

  return res.status(StatusCodes.OK).json({ normalWeight });
};
const postNormalWeight = async (req, res) => {
  const normalWeight = await NormalWeight.create(req.body);
  return res.status(StatusCodes.CREATED).json({ normalWeight });
};
// delete NormalWeight
const deleteNormalWeight = async (req, res) => {
  const { id } = req.params;
  const normalWeight = await NormalWeight.findByIdAndDelete(id);
  return res.status(StatusCodes.OK).json({ normalWeight });
};

const getNormalWeight = async (req, res) => {
  const normalWeight = await NormalWeight.findById(req.params.id);
  return res.status(StatusCodes.OK).json({ normalWeight });
};
const editNormalWeight = async (req, res) => {
  const normalWeight = await NormalWeight.findByIdAndUpdate(req.params.id, req.body);
  return res.status(StatusCodes.OK).json({ normalWeight });
};
// Breakfast
const getBreakFast = async (req, res) => {
  const { id } = req.params;
  const normalWeight = await NormalWeight.findById(id);
  const BreakFast = normalWeight.BreakFast;
  res.status(StatusCodes.OK).json({ BreakFast });
};
const postBreakFast = async (req, res) => {
  const { id } = req.params;
  const normalWeight = await NormalWeight.findByIdAndUpdate(id, {
    $push: { BreakFast: req.body },
  });
  res.status(StatusCodes.CREATED).json({ normalWeight });
};
const deleteBreakFast = async (req, res) => {
  const { normalWeightId, BreakFastId } = req.params;
  const normalWeight = await NormalWeight.findByIdAndUpdate(normalWeightId, {
    $pull: { BreakFast: {_id:BreakFastId} },
  });
  res.status(StatusCodes.OK).json({ normalWeight });
};
//Lunch
const getLunch = async (req, res) => {
  const { id } = req.params;
  const normalWeight = await NormalWeight.findById(id);
  const Lunch = normalWeight.Lunch;
  res.status(StatusCodes.OK).json({ Lunch });
};
const postLunch = async (req, res) => {
  const { id } = req.params;
  const normalWeight = await NormalWeight.findByIdAndUpdate(id, {
    $push: { Lunch: req.body },
  });
  res.status(StatusCodes.CREATED).json({ normalWeight });
};
const deleteLunch = async (req, res) => {
  const { normalWeightId, LunchId } = req.params;
  const normalWeight = await NormalWeight.findByIdAndUpdate(normalWeightId, {
    $pull: { Lunch: {_id:LunchId} },
  });
  res.status(StatusCodes.OK).json({ normalWeight });
};
// Dinner
const getDinner = async (req, res) => {
  const { id } = req.params;
  const normalWeight = await NormalWeight.findById(id);
  const Dinner = normalWeight.Dinner;
  res.status(StatusCodes.OK).json({ Dinner });
};
const postDinner = async (req, res) => {
  const { id } = req.params;
  const normalWeight = await NormalWeight.findByIdAndUpdate(id, {
    $push: { Dinner: req.body },
  });
  res.status(StatusCodes.CREATED).json({ normalWeight });
};
const deleteDinner = async (req, res) => {
  const { normalWeightId, DinnerId } = req.params;
  const normalWeight = await NormalWeight.findByIdAndUpdate(normalWeightId, {
    $pull: { Dinner: {_id:DinnerId} },
  });
  res.status(StatusCodes.OK).json({ normalWeight });
};
//Exercise
const getExercise = async (req, res) => {
  const { id } = req.params;
  const normalWeight = await NormalWeight.findById(id);
  const Exercise = normalWeight.Exercise;
  res.status(StatusCodes.OK).json({ Exercise });
};
const postExercise = async (req, res) => {
  const { id } = req.params;
  const normalWeight = await NormalWeight.findByIdAndUpdate(id, {
    $push: { Exercise: req.body },
  });
  res.status(StatusCodes.CREATED).json({ normalWeight });
};
const deleteExercise = async (req, res) => {
  const { normalWeightId, ExerciseId } = req.params;
  const normalWeight = await NormalWeight.findByIdAndUpdate(normalWeightId, {
    $pull: { Exercise: {_id:ExerciseId} },
  });
  res.status(StatusCodes.OK).json({ normalWeight });
};

module.exports = {
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
};
