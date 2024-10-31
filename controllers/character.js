const Character = require("../models/Character");
const fs = require("fs/promises");
const { HttpError, cloudinary } = require("../helpers");
const { ctrlWrapper } = require("../decorators");

const getAllCharacters = async (req, res) => {
  const { page = 1, limit = 5 } = req.params;

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
const addCharacter = async (req, res) => {
  const images = [];

  if (req.files && req.files.length > 0) {
    for (const file of req.files) {
      const { url } = await cloudinary.uploader.upload(file.path, {
        folder: "characters",
      });
      images.push(url);
      await fs.unlink(file.path);
    }
  }

  const characterData = {
    ...req.body,
    images,
  };

  const result = await Character.create(characterData);
  res.status(201).json(result);
};

const updateCharacter = async (req, res) => {
  const { id } = req.params;

  const existingCharacter = await Character.findById(id);

  if (!existingCharacter) {
    throw HttpError(404, `Character with id ${id} not found`);
  }

  const images = [];

  if (req.files && req.files.length > 0) {
    for (const file of req.files) {
      const { url } = await cloudinary.uploader.upload(file.path, {
        folder: "characters",
      });
      images.push(url);
      await fs.unlink(file.path);
    }
  }

  const characterData = {
    ...existingCharacter.toObject(),
    ...req.body,
    ...(images.length > 0 && { images }),
  };

  const result = await Character.findByIdAndUpdate(id, characterData, {
    new: true,
  });

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
  addCharacter: ctrlWrapper(addCharacter),
  updateCharacter: ctrlWrapper(updateCharacter),
  deleteCharacter: ctrlWrapper(deleteCharacter),
};
