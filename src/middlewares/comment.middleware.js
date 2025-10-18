const { Comment } = require("../../db/models");

const commentSchema = require("../schemas/comment.schema");

const validateCommentSchema = (req, res, next) => {
  const { error } = commentSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    });
  }

  next();
};

const validateCommentExists = async (req, res, next) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findByPk(id);
    console.log("Comentario encontrado:", comment);
    if (!comment) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }

    req.comment = comment;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error al validar el comentario" });
  }
};

const validateRequiredFields = (req, res, next) => {
  const { commentContent, userId, postId } = req.body;

  if (!commentContent || !userId || !postId) {
    return res.status(400).json({
      message: "Los campos commentContent, userId y postId son requeridos"
    });
  }

  if (commentContent.trim().length === 0) {
    return res.status(400).json({
      message: "El contenido del comentario no puede estar vacío"
    });
  }

  next();
};

module.exports = {
  validateCommentSchema,
  validateCommentExists,
  validateRequiredFields,
};