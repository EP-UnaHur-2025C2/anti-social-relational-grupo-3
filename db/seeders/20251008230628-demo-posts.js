"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          userId: 1,
          description:
            "Explorando los confines del universo digital mientras el código cobra vida ante mis ojos.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          description:
            "La física cuántica y el humor se encuentran en un bar... el resultado es impredecible.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          description:
            "Mis pensamientos resuenan en las paredes digitales de este espacio virtual infinito.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          description:
            "Brillando con la intensidad de mil soles en el horizonte tecnológico.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          description:
            "Cruzando las autopistas digitales bajo el manto de la medianoche.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          description:
            "Renaciendo de las cenizas del código obsoleto, más fuerte y elegante que nunca.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          description:
            "El silencio precede a la tormenta de ideas que está por desatarse.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          description:
            "Navegando entre constelaciones de datos y galaxias de información.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          description:
            "Mi esencia digital deja un rastro luminoso en la matrix.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          description:
            "Viajando sin rumbo fijo por el cosmos virtual, descubriendo nuevos mundos.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          description:
            "Bailando con las sombras del atardecer en el mundo digital.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          description:
            "Abriendo nuevos caminos en el paisaje pixelado de la innovación.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          description:
            "Mi voz resuena en la luna llena, creando ecos en el espacio digital.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          description:
            "Consultando los oráculos del código para descifrar el futuro tecnológico.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          description:
            "La marea de creatividad fluye con fuerza, teñida de pasión y determinación.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          description:
            "Embarcándome en un viaje místico a través de realidades alternativas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 17,
          description:
            "Corriendo entre llamas de innovación, dejando atrás lo convencional.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 18,
          description:
            "La calma que precede a la revolución creativa está por llegar.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 19,
          description:
            "Dando un salto cuántico hacia nuevas dimensiones de pensamiento.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 20,
          description:
            "Protegiendo los sueños digitales en este reino etéreo de posibilidades.",
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
