// schemas/commentSchema.js
const Joi = require("joi");

const postSchema = Joi.object({
  description: Joi.string().min(1).max(500).required().messages({
    "any.required": "El contenido del post es obligatorio",
    "string.min": "El contenido del post no puede estar vacío",
    "string.max": "El contenido del post no puede tener más de 500 caracteres",
  }),
  userId: Joi.number().integer().positive().required().messages({
    "any.required": "userId es obligatorio",
    "number.base": "userId debe ser un número",
    "number.integer": "userId debe ser un número entero",
    "number.positive": "userId debe ser un número positivo"
  }),
  tags: Joi.array().items(
    Joi.number().integer().positive()
  ).optional().messages({
    "array.base": "tags debe ser un array de números"
  })
});

module.exports = postSchema;