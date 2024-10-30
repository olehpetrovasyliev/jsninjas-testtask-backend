const handleValidateError = (err, data, next) => {
  err.status = 400;
  next();
};
function runUpdateValidators(next) {
  this.options.runValidators = true;
  next();
}

module.exports = { handleValidateError, runUpdateValidators };
