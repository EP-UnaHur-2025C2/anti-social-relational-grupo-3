const { User } = require("../../db/models");

const validateDuplicatedNickName = async (req, res, next) => {
  const { nickName } = req.body;
  const user = await User.findOne({ where: { nickName } });
  if (user) {
    return res.status(409).json({ message: "El nickName ya está en uso" });
  }
  next();
};

module.exports = {
  validateDuplicatedNickName,
};
