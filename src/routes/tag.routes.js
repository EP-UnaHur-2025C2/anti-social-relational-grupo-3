const { Router } = require("express");
const tagController = require("../controllers/tag.controller");
const {
  validateId,
  schemaValidator,
  existModelById,
} = require("../middlewares/generic.middleware");
const {
  validateDuplicatedName
} = require("../middlewares/tag.middleware");

const TagSchema = require("../schemas/tag.schema");
const { Tag } = require("../../db/models");

const router = Router();

router.get("/", tagController.obtenerTags);
router.get(
  "/:id",
  validateId,
  existModelById(Tag),
  tagController.obtenerTag
);
router.post(
  "/",
  schemaValidator(TagSchema),
  validateDuplicatedName,
  tagController.crearTag
);
router.put(
  "/:id",
  validateId,
  existModelById(Tag),
  schemaValidator(TagSchema),
  tagController.actualizarTag
);
router.delete(
  "/:id",
  validateId,
  existModelById(Tag),
  tagController.eliminarTag
);

module.exports = router;