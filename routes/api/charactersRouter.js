const express = require("express");
const { charactersCtrl } = require("../../controllers");

const router = express.Router();

router.get("/", charactersCtrl.getAllCharacters);

module.exports = router;
