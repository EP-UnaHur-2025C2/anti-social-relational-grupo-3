const Sequelize = require("sequelize");
const { Post } = require("../../db/models");

const crearPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
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

module.exports = {
  crearPost,
  obtenerPost,
  obtenerPosts,
  actualizarPost,
  eliminarPost,
};
