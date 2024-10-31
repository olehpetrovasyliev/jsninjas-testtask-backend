const express = require("express");
const { charactersCtrl } = require("../../controllers");
const { upload, validateBody, isValidId } = require("../../middlewares");
const { characterSchemas } = require("../../schemas");

const router = express.Router();

router.get("/", charactersCtrl.getAllCharacters);
router.get("/:id", isValidId, charactersCtrl.getCharacterById);
router.post(
  "/",
  upload.array("images", 10),
  validateBody(characterSchemas.addCharacterJoiSchema),

  charactersCtrl.addCharacter
);

router.put(
  "/:id",
  upload.array("images", 10),
  validateBody(characterSchemas.updateCharacterJoiSchema),

  charactersCtrl.updateCharacter
);

router.delete("/:id", isValidId, charactersCtrl.deleteCharacter);

module.exports = router;
