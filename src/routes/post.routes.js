const { Router } = require("express");
const postController = require("../controllers/post.controller");
const { validateId } = require("../middlewares/generic.middleware");
const {
    validatePostSchema,
    validatePostExists,
    validateUserExists,
} = require('../middlewares/post.middleware');


const router = Router();

router.get("/", postController.obtenerPosts);
router.get("/:id", validateId, postController.obtenerPost);
router.post("/", validatePostSchema, validateUserExists, postController.crearPost);
router.put("/:id", validateId, validatePostExists, validatePostSchema, postController.actualizarPost);
router.delete("/:id", validateId, validatePostExists, postController.eliminarPost);

module.exports = router;
