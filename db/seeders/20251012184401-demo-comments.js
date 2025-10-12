"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Comments", [
      {
        postId: 1,
        userId: 1,
        commentContent: "Excelente publicación 👏",
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 2,
        userId: 2,
        commentContent: "Muy interesante el tema!",
        date: new Date("2025-06-01"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
