const Joi = require("joi");

const idParamsSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
}).messages({
  "any.required": "El parametro id es obligatorio",
  "number.base": "El parametro id debe ser un número",
  "number.integer": "El parametro id debe ser entero",
  "number.positive": "El parametro id debe ser positivo",
});

module.exports = {
  idParamsSchema,
};
