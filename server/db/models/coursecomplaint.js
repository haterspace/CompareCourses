const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CourseComplaint extends Model {
    static associate({ User, Course }) {
      this.belongsTo(Course, { foreignKey: "courseId" });
      this.belongsTo(User, { foreignKey: "userId" });
    }
  }
  CourseComplaint.init(
    {
      userId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CourseComplaint",
    }
  );
  return CourseComplaint;
};
