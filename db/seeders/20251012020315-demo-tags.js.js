'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [
      { name: "#VibesDigitales", createdAt: new Date(), updatedAt: new Date() },
      { name: "#ModoCreativo", createdAt: new Date(), updatedAt: new Date() },
      { name: "#CodigoYCaos", createdAt: new Date(), updatedAt: new Date() },
      { name: "#AntiSocialClub", createdAt: new Date(), updatedAt: new Date() },
      { name: "#PensamientosEnPixel", createdAt: new Date(), updatedAt: new Date() },
      { name: "#CafeYTeclas", createdAt: new Date(), updatedAt: new Date() },
      { name: "#MoodDesconectado", createdAt: new Date(), updatedAt: new Date() },
      { name: "#ModoNoMolestar", createdAt: new Date(), updatedAt: new Date() },
      { name: "#RefugioDigital", createdAt: new Date(), updatedAt: new Date() },
      { name: "#PensarEsUnRiesgo", createdAt: new Date(), updatedAt: new Date() },
      { name: "#ArteGlitch", createdAt: new Date(), updatedAt: new Date() },
      { name: "#PixelSad", createdAt: new Date(), updatedAt: new Date() },
      { name: "#Error404Emociones", createdAt: new Date(), updatedAt: new Date() },
      { name: "#ModoInvisible", createdAt: new Date(), updatedAt: new Date() },
      { name: "#RealidadBuffering", createdAt: new Date(), updatedAt: new Date() },
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
