// middlewares/postMiddlewares.js
const { Post, User } = require("../../db/models");
const postSchema = require("../schemas/post.schema");

const validatePostSchema = (req, res, next) => {
  const { error } = postSchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({ 
      message: error.details[0].message 
    });
  }
  
  next();
};

const validatePostExists = async (req, res, next) => {
  const { id } = req.params;
  
  try {
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" });
    }
    
    req.post = post;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error al validar el post" });
  }
};

const validateUserExists = async (req, res, next) => {
  const { userId } = req.body;
  
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error al validar el usuario" });
  }
};

module.exports = {
  validatePostSchema,
  validatePostExists,
  validateUserExists,
};