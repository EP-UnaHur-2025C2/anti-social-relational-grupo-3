"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          nickName: "NebulaWalker",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "QuantumJester",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "EchoChamber",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "SolarFlare",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "MidnightRider",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "CyberPhoenix",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "VelvetThunder",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "StellarDrift",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "NeonGhost",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "CosmicNomad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "ShadowDancer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "PixelPioneer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "LunarEcho",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "DigitalOracle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "CrimsonTide",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "MysticVoyager",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "BlazeRunner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "SilentStorm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "QuantumLeap",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickName: "EtherealGuardian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
