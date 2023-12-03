module.exports = (req, res, next) => {
  // Set Content range header
  res.header("Content-Range", "posts 0-10/10");

  //  Proceed
  next();
};
