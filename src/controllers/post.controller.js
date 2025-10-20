const Sequelize = require("sequelize");
const { Post, Tag, PostImage } = require("../../db/models");

const crearPost = async (req, res) => {
  try {
    const { description, userId, tags = [], images = [] } = req.body;

    // Crear el post
    const post = await Post.create({ description, userId });

    // Asociar tags si existen
    if (tags.length > 0) {
      const existingTags = await Tag.findAll({ where: { id: tags } });
      await post.addTags(existingTags);
    }

    // Crear y asociar imágenes si existen
    if (images.length > 0) {
      const imagePromises = images.map((url) =>
        PostImage.create({ postId: post.id, url })
      );
      await Promise.all(imagePromises);
    }

    // Retornar el post con sus relaciones
    const postConRelaciones = await Post.findByPk(post.id, {
      include: [
        {
          model: PostImage,
          as: "images",
          attributes: ["id", "url", "createdAt"],
        },
        {
          model: Tag,
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
      ],
    });

    res.status(201).json(postConRelaciones);
  } catch (error) {
    console.error("Error al crear el post:", error);
    res.status(500).json({ message: "Error al crear el post", error });
  }
};

const obtenerPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id, {
      include: [
        {
          model: PostImage,
          as: "images",
          attributes: ["id", "url", "createdAt"],
        },
        {
          model: Tag,
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
      ],
    });
    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

const obtenerPosts = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;  //pagina en donde comienza
    const limit = parseInt(req.query.limit) || 10;  //cantidad de posts por pagina
    const offset = (page - 1) * limit; //salto para saber desde donde traer los post (ej: si page es 2 y limit es 10, offset es 10 entonces trae desde el 11 al 20)

    const { count, rows: posts } = await Post.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: PostImage,
          as: "images",
          attributes: ["id", "url", "createdAt"],
        },
        {
          model: Tag,
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
      ],
    });

    res.status(200).json({
      posts,
      pagination: {
        page,
        limit,
        total: count,
        pages: Math.ceil(count / limit),
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

const actualizarPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    await post.update(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

const eliminarPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" });
    }
    await post.destroy();
    res.status(200).json({ message: "Post eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

const obtenerTagsDePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id, {
      include: [
        {
          model: Tag,
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
      ],
    });

    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const agregarTagsAPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { tagIds } = req.body;

    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ message: "Post no encontrado" });

    const tags = await Tag.findAll({ where: { id: tagIds } });
    if (tags.length === 0)
      return res.status(404).json({ message: "Etiqueta/s no encontrada/s" });

    await post.addTags(tags);

    res.status(200).json({ message: "Etiqueta/s agregada/s correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al agregar etiqueta/s", error });
  }
};

const quitarTagsDePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { tagIds } = req.body;

    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ message: "Post no encontrado" });

    const tags = await Tag.findAll({ where: { id: tagIds } });
    if (tags.length === 0)
      return res.status(404).json({ message: "Etiqueta/s no encontrada/s" });

    await post.removeTags(tags);

    res.status(200).json({ message: "Etiqueta/s eliminada/s correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar etiqueta/s", error });
  }
};

const obtenerImagenesDePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByPk(id, {
      include: [
        {
          model: PostImage,
          as: "images",
          attributes: ["id", "url", "createdAt"],
        },
      ],
    });

    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    res.status(200).json({
      images: post.images,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener las imágenes del post", error });
  }
};

const agregarImagenesAPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { images } = req.body; // Array de URLs de imágenes

    if (!images || !Array.isArray(images) || images.length === 0) {
      return res
        .status(400)
        .json({ message: "Se requiere un array de URLs de imágenes" });
    }

    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    // Crear las imágenes asociadas al post
    const imagePromises = images.map((url) =>
      PostImage.create({ postId: id, url })
    );

    const createdImages = await Promise.all(imagePromises);

    res.status(201).json({
      message: "Imágenes agregadas correctamente",
      images: createdImages,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al agregar imágenes al post", error });
  }
};

const eliminarImagenDePost = async (req, res) => {
  try {
    const { id, imageId } = req.params;

    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    const image = await PostImage.findOne({
      where: { id: imageId, postId: id },
    });

    if (!image) {
      return res
        .status(404)
        .json({ message: "Imagen no encontrada en este post" });
    }

    await image.destroy();

    res.status(200).json({ message: "Imagen eliminada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la imagen", error });
  }
};

module.exports = {
  crearPost,
  obtenerPost,
  obtenerPosts,
  actualizarPost,
  eliminarPost,
  obtenerTagsDePost,
  agregarTagsAPost,
  quitarTagsDePost,
  obtenerImagenesDePost,
  agregarImagenesAPost,
  eliminarImagenDePost,
};
