const { Tag } = require("../../db/models");

const validateDuplicatedName = async (req, res, next) => {
  const { name } = req.body;
  const tag = await Tag.findOne({ where: { name } });
  if (tag) {
    return res.status(409).json({ message: "El name ya está en uso" });
  }
  next();
};

module.exports = {
  validateDuplicatedName,
};