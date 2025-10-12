// schemas/commentSchema.js
const Joi = require("joi");

const commentSchema = Joi.object({
  commentContent: Joi.string().min(1).max(500).required().messages({
    "any.required": "El contenido del comentario es obligatorio",
    "string.min": "El comentario no puede estar vacío",
    "string.max": "El comentario no puede tener más de 500 caracteres",
  }),
  userId: Joi.number().integer().positive().required().messages({
    "any.required": "userId es obligatorio",
    "number.base": "userId debe ser un número",
  }),
  postId: Joi.number().integer().positive().required().messages({
    "any.required": "postId es obligatorio", 
    "number.base": "postId debe ser un número",
  }),
});

module.exports = commentSchema;