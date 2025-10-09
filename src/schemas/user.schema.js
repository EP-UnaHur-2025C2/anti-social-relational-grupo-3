const Joi = require("joi");

const userSchema = Joi.object({
  nickName: Joi.string().min(3).max(30).required().messages({
    "any.required": "nickName es obligatorio",
    "string.min": "nickName debe tener como mínimo {#limit} caracteres",
    "string.max": "nickName debe tener como máximo {#limit} caracteres",
    "object.unknown": "El campo {#label} no está permitido",
  }),
});

module.exports = userSchema;
