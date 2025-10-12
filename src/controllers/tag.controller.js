const { Tag } = require("../../db/models");

const crearTag = async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

const obtenerTag = async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await Tag.findByPk(id);
    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

const obtenerTags = async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

const actualizarTag = async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await Tag.findByPk(id);
    await Tag.update(req.body);
    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

const eliminarTag = async (req, res) => {
  console.log("eliminarTag");
  try {
    const { id } = req.params;
    const tag = await Tag.findByPk(id);
    console.log(tag);
    await Tag.destroy();
    res.status(200).json(tag);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error" });
  }
};

module.exports = {
  crearTag,
  obtenerTag,
  obtenerTags,
  actualizarTag,
  eliminarTag,
};
