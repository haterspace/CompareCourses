const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class JobCourses extends Model {
    static associate({ Course, User }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Course, { foreignKey: "courseId" });
    }
  }
  JobCourses.init(
    {
      support: DataTypes.INTEGER,
      actualInfo: DataTypes.INTEGER,
      portfolio: DataTypes.INTEGER,
      salaryAverage: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "JobCourses",
    }
  );
  return JobCourses;
};
