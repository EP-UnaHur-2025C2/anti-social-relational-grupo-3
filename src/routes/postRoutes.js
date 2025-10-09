const { Router } = require("express");
const postController = require("../controllers/postController");
const { validateId } = require("../middlewares/generic.middleware");

const router = Router();

router.get("/", postController.obtenerPosts);
router.get("/:id", validateId, postController.obtenerPost);
router.post("/", postController.crearPost);
router.put("/:id", validateId, postController.actualizarPost);
router.delete("/:id", validateId, postController.eliminarPost);

module.exports = router;
