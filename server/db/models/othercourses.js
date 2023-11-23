const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class OtherCourses extends Model {
    static associate({ Course, User }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Course, { foreignKey: "courseId" });
    }
  }
  OtherCourses.init(
    {
      practicalTasks: DataTypes.INTEGER,
      instructors: DataTypes.INTEGER,
      realLifeApplication: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OtherCourses",
    }
  );
  return OtherCourses;
};
