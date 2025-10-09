const { idParamsSchema } = require("../schemas/generic.schema");

const validateId = (req, res, next) => {
  const { error } = idParamsSchema.validate(req.params);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const existModelById = (modelo) => async (req, res, next) => {
  try {
    const data = await modelo.findByPk(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Not found" });
    }
    next();
  } catch (error) {
    console.error("Error in existModelById middleware:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const schemaValidator = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      errores: error.details.map((e) => ({
        atributo: e.path[0],
        mensaje: e.message,
        tipo: e.type,
      })),
    });
  }
  next();
};

module.exports = {
  validateId,
  existModelById,
  schemaValidator,
};
