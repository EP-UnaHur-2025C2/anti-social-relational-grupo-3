const Joi = require("joi");

const postImageSchema = Joi.object({
  images: Joi.array().items(
    Joi.string().uri().required().messages({
      "string.uri": "Cada imagen debe ser una URL válida",
      "any.required": "La URL de la imagen es obligatoria"
    })
  ).min(1).max(10).required().messages({
    "array.min": "Debe proporcionar al menos una imagen",
    "array.max": "No se pueden agregar más de 10 imágenes por vez",
    "any.required": "El campo images es obligatorio"
  })
});

const singleImageSchema = Joi.object({
  url: Joi.string().uri().required().messages({
    "string.uri": "Debe ser una URL válida",
    "any.required": "La URL de la imagen es obligatoria"
  })
});

module.exports = {
  postImageSchema,
  singleImageSchema
};