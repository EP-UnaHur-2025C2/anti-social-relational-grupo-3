const Sequelize = require("sequelize");
const { Post, Tag } = require("../../db/models");

const crearPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);

    // Crear imágenes y asociarlas al post
    // Las imágenes no existen
    // Hay que crearlas a partir de lo que venga en body

    // Asociar tags al post
    // El tag ya existe, solo hay que asociarlo

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

const obtenerPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
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
    const posts = await Post.findAll();
    res.status(200).json(posts);
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

    // Actualizar imágenes asociadas al post
    // Las imágenes no existen, hay que crearlas a partir de lo que venga en body

    // Asociar tags al post
    // El tag ya existe, solo hay que asociarlo

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
    const { id } = req.params
    console.log("id", id)
    const post = await Post.findByPk(id, {
      include: [
        {
          model: Tag,
          attributes: ['id', 'name'],
          through: { attributes: [] },
        },
      ],
    })

    if (!post) {
      return res.status(404).json({ message: 'Post no encontrado' })
    }

    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}


const agregarTagsAPost = async (req, res) => {
  try {
    const { id } = req.params
    const { tagIds } = req.body

    const post = await Post.findByPk(id)
    if (!post) return res.status(404).json({ message: 'Post no encontrado' })

    const tags = await Tag.findAll({ where: { id: tagIds } })
    if (tags.length === 0) return res.status(404).json({ message: 'Etiqueta/s no encontrada/s' })

    await post.addTags(tags)

    res.status(200).json({ message: 'Etiqueta/s agregada/s correctamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al agregar etiqueta/s', error })
  }
}

const quitarTagsDePost = async (req, res) => {
  try {
    const { id } = req.params
    const { tagIds } = req.body

    const post = await Post.findByPk(id)
    if (!post) return res.status(404).json({ message: 'Post no encontrado' })

    const tags = await Tag.findAll({ where: { id: tagIds } })
    if (tags.length === 0) return res.status(404).json({ message: 'Etiqueta/s no encontrada/s' })

    await post.removeTags(tags)

    res.status(200).json({ message: 'Etiqueta/s eliminada/s correctamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al eliminar etiqueta/s', error })
  }
}

module.exports = {
  crearPost,
  obtenerPost,
  obtenerPosts,
  actualizarPost,
  eliminarPost,
  obtenerTagsDePost,
  agregarTagsAPost,
  quitarTagsDePost
};
