/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const seedData = [];

    for (let i = 10; i < 30; i++) {
      seedData.push({
        courseId: i,
      });
    }

    const rateSeeds = [];

    for (let i = 1; i < 30; i++) {
      rateSeeds.push({
        userId: 1,
        courseId: i,
        rate: Math.floor(Math.random() * 10),
      });
    }
    await queryInterface.bulkInsert(
      "Likes",
      [
        {
          userId: 1,
          courseId: 1,
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "JobCourses",
      [
        {
          courseId: 1,
        },
        {
          courseId: 3,
        },
        {
          courseId: 2,
        },
        {
          courseId: 4,
        },
        {
          courseId: 5,
        },
        {
          courseId: 6,
        },
        {
          courseId: 7,
        },
        {
          courseId: 8,
        },
        {
          courseId: 9,
        },
        {
          courseId: 10,
        },
      ],
      {}
    );

    await queryInterface.bulkInsert("OtherCourses", seedData, {});
    await queryInterface.bulkInsert("Ratings", rateSeeds, {});
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
