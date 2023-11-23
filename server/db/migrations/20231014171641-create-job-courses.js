/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("JobCourses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      support: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 5,
      },
      actualInfo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 5,
      },
      portfolio: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 5,
      },
      salaryAverage: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 20000,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        defaultValue: 5,
      },
      courseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Courses",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("JobCourses");
  },
};
