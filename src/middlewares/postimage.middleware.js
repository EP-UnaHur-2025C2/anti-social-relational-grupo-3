
const { PostImage } = require("../../db/models");
const { postImageSchema } = require("../schemas/postimage.schema");


const validatePostImagesBody = (req, res, next) => {
  const { error } = postImageSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      message: "Errores de validación en imágenes",
      details: error.details.map(d => d.message),
    });
  }

  
  if (Array.isArray(req.body.images)) {
    const trimmed = req.body.images.map(u => (typeof u === "string" ? u.trim() : u));
    
    req.body.images = [...new Set(trimmed)];
  }
  next();
};


const MAX_TOTAL = 10;

const enforceMaxImagesPerPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const toAdd = Array.isArray(req.body.images) ? req.body.images.length : 0;

    const already = await PostImage.count({ where: { postId } });
    if (already + toAdd > MAX_TOTAL) {
      return res.status(400).json({
        message: `Este post ya tiene ${already} imágenes. No podés superar ${MAX_TOTAL} en total.`,
      });
    }
    next();
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Error al validar el límite de imágenes" });
  }
};


const validateImageIdParam = (req, res, next) => {
  const { imageId } = req.params;
  const n = Number(imageId);
  if (!Number.isInteger(n) || n <= 0) {
    return res.status(400).json({ message: "El parámetro imageId debe ser un número entero positivo" });
  }
  next();
};


const ensureImageBelongsToPost = async (req, res, next) => {
  try {
    const { id: postId, imageId } = req.params;
    const img = await PostImage.findOne({ where: { id: imageId, postId } });
    if (!img) {
      return res.status(404).json({ message: "Imagen no encontrada en este post" });
    }
    req.image = img; 
    next();
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Error al validar la imagen" });
  }
};

module.exports = {
  validatePostImagesBody,
  enforceMaxImagesPerPost,
  validateImageIdParam,
  ensureImageBelongsToPost,
};
