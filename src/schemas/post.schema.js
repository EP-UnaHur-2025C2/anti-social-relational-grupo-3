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
  images: Joi.array().items(
    Joi.string().uri().required().messages({
      "string.uri": "Cada imagen debe ser una URL válida",
      "any.required": "La URL de la imagen es obligatoria"
    })
  ).min(0).max(10).optional().messages({
    "array.min": "Debe proporcionar al menos una imagen si el campo images está presente",
    "array.max": "No se pueden agregar más de 10 imágenes por vez"
  }),
  tags: Joi.array().items(
    Joi.number().integer().positive()
  ).optional().messages({
    "array.base": "tags debe ser un array de números"
  })
});

module.exports = postSchema;