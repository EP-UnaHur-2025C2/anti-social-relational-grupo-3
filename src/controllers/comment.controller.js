const { Comment } = require("../../db/models");
const { Op } = require('sequelize'); 


const crearComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el comentario" });
  }
};

const obtenerComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByPk(id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el comentrario" });
  }
};

const obtenerComments = async (req, res) => {
  try {
    const months = parseInt(req.query.months) || 6; //le paso por default 6 meses si no manda la cantidad en la query

    const today = new Date(); 
    const limitMonth = new Date();
    limitMonth.setMonth(limitMonth.getMonth() - months); //calculo los meses

    const recentComments = await Comment.findAll({
      where: {
        date: { 
          [Op.between]: [limitMonth, today] 
        }
      },
      order: [["date", "DESC"]],
    });

    res.status(200).json(recentComments);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los comentarios",
      error: error.message,
    });
  }
};

const actualizarComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByPk(id);
    await comment.update(req.body);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el comentario" });
  }
};

const eliminarComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByPk(id);
    await comment.destroy();
    res.status(200).json(comment);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error al eliminar el comentario" });
  }
};

module.exports = {
  crearComment,
  obtenerComment,
  obtenerComments,
  actualizarComment,
  eliminarComment,
};
