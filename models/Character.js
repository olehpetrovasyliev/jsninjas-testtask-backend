const { Schema, model } = require("mongoose");
const { requireIfNew } = require("../helpers");
const { handleValidateError, runUpdateValidators } = require("./hooks");

const characterSchema = new Schema(
  {
    nickname: {
      type: String,
      required: requireIfNew,
    },
    real_name: {
      type: String,
      required: requireIfNew,
    },
    origin_description: {
      type: String,
      required: requireIfNew,
    },
    superpowers: [
      {
        type: String,
        required: requireIfNew,
      },
    ],
    catch_phrase: {
      type: String,
      required: requireIfNew,
    },
    images: [
      {
        type: String,
        required: requireIfNew,
      },
    ],
  },
  { versionKey: false, timestamps: false }
);

const Character = model("Character", characterSchema);

module.exports = Character;

characterSchema.post("save", handleValidateError);

characterSchema.pre("findOneAndUpdate", runUpdateValidators);
