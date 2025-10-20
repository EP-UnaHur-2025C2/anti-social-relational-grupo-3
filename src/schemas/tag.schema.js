const Joi = require("joi");

const tagSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": "name es obligatorio",
    "string.min": "name debe tener como mínimo {#limit} caracteres",
    "string.max": "name debe tener como máximo {#limit} caracteres",
    "object.unknown": "El campo {#label} no está permitido",
  }),
});

module.exports = tagSchema;

/**
 * const Joi = require('joi');

const tagId = Joi.number().integer();

const tagName = Joi.string().min(1).max(50).required();

const createTagSchema = Joi.object({
  name: tagName,
});


module.exports = {
  createTagSchema
};
 */