const { Router } = require("express");
const userController = require("../controllers/user.controller");
const {
  validateId,
  schemaValidator,
  existModelById,
} = require("../middlewares/generic.middleware");
const {
  validateDuplicatedNickName,
} = require("../middlewares/user.middleware");
const UserSchema = require("../schemas/user.schema");
const { User } = require("../../db/models");

const router = Router();

router.get("/", userController.obtenerUsers);
router.get(
  "/:id",
  validateId,
  existModelById(User),
  userController.obtenerUser
);
router.post(
  "/",
  schemaValidator(UserSchema),
  validateDuplicatedNickName,
  userController.crearUser
);
router.put(
  "/:id",
  validateId,
  existModelById(User),
  schemaValidator(UserSchema),
  userController.actualizarUser
);
router.delete(
  "/:id",
  validateId,
  existModelById(User),
  userController.eliminarUser
);

module.exports = router;
