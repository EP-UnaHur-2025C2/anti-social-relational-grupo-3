const { Router } = require("express");
const postController = require("../controllers/post.controller");
const { validateId, schemaValidator } = require("../middlewares/generic.middleware");
const {
    validatePostSchema,
    validatePostExists,
    validateUserExists,
} = require('../middlewares/post.middleware');
const { postImageSchema } = require('../schemas/postimage.schema');


const router = Router();

router.get("/", postController.obtenerPosts);
router.get("/:id", validateId, postController.obtenerPost);
router.post("/", validatePostSchema, validateUserExists, postController.crearPost);
router.put("/:id", validateId, validatePostExists, validatePostSchema, postController.actualizarPost);
router.delete("/:id", validateId, validatePostExists, postController.eliminarPost);

router.get('/:id/tags', validateId, postController.obtenerTagsDePost);
router.post('/:id/tags', validateId, postController.agregarTagsAPost)
router.delete('/:id/tags', validateId, postController.quitarTagsDePost)

router.get('/:id/images', validateId, validatePostExists, postController.obtenerImagenesDePost);
router.post('/:id/images', validateId, validatePostExists, schemaValidator(postImageSchema), postController.agregarImagenesAPost);
router.delete('/:id/images/:imageId', validateId, validatePostExists, postController.eliminarImagenDePost);

module.exports = router;
