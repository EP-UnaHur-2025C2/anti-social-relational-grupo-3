const { Router } = require("express");
const commentController = require("../controllers/comment.controller");
const { validateId } = require("../middlewares/generic.middleware");
const {
    validateCommentSchema,
    validateCommentExists,
    validateRequiredFields,
} = require('../middlewares/comment.middleware');


const router = Router();

router.get("/", commentController.obtenerComments);
router.get("/:id", validateId, validateCommentExists, commentController.obtenerComment);
router.post("/", validateCommentSchema, validateRequiredFields, commentController.crearComment);
router.put("/:id", validateId, validateCommentSchema, validateCommentExists, commentController.actualizarComment);
router.delete("/:id", validateId, validateCommentExists, commentController.eliminarComment);

module.exports = router;
