const express = require("express");
const { charactersCtrl } = require("../../controllers");
const { upload } = require("../../middlewares");

const router = express.Router();

router.get("/", charactersCtrl.getAllCharacters);
router.get("/:id", charactersCtrl.getCharacterById);
router.post("/", upload.array("images", 10), charactersCtrl.addCharacter);

module.exports = router;
