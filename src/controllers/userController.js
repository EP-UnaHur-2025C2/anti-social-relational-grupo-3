const Sequelize = require("sequelize");
const { User } = require("../../db/models");

const crearUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Sequelize.UniqueConstraintError) {
      return res.status(409).json({
        message: "El nickName ya está en uso",
      });
    }

    res.status(500).json({ message: "Error" });
  }
};

const obtenerUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User no encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

const obtenerUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

const actualizarUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User no encontrado" });
    }
    await user.update(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

const eliminarUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User no encontrado" });
    }
    await user.destroy();
    res.status(200).json({ message: "User eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

module.exports = {
  crearUser,
  obtenerUser,
  obtenerUsers,
  actualizarUser,
  eliminarUser,
};
