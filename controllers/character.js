const Character = require("../models/Character");
const fs = require("fs/promises");
const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../decorators");

const getAllCharacters = async (req, res) => {
  const { page = 1, limit = 10 } = req.params;

  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);

  const totalCount = await Character.countDocuments();

  const result = await Character.find({ ...req.query })
    .limit(Number(limit))
    .skip((page - 1) * limit);

  res.json({
    page: pageNum,
    perPage: limitNum,
    totalPages: Math.ceil(totalCount / limit),
    results: result,
  });
};

const getCharacterById = async (req, res) => {
  const { id } = req.params;
  const result = await Character.findById(id);

  if (!result) {
    throw HttpError(404, `Character with id ${id} not found`);
  }

  res.json(result);
};

const deleteCharacter = async (req, res) => {
  const { id } = req.params;

  const result = await Character.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Id not found");
  }

  res.json({ message: `Character with id ${id} deleted successfully` });
};

module.exports = {
  getAllCharacters: ctrlWrapper(getAllCharacters),
  getCharacterById: ctrlWrapper(getCharacterById),
  deleteCharacter: ctrlWrapper(deleteCharacter),
};
