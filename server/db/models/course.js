const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate({
      Category,
      Company,
      Comment,
      CourseComplaint,
      Like,
      Rating,
      OtherCourses,
      JobCourses,
    }) {
      this.belongsTo(Category, { foreignKey: "categoryId" });
      this.belongsTo(Company, { foreignKey: "companyId" });
      this.hasMany(Comment, { foreignKey: "courseId" });
      this.hasMany(CourseComplaint, { foreignKey: "courseId" });
      this.hasMany(Like, { foreignKey: "courseId" });
      this.hasMany(Rating, { foreignKey: "courseId" });
      this.hasMany(OtherCourses, { foreignKey: "courseId" });
      this.hasMany(JobCourses, { foreignKey: "courseId" });
    }
  }
  Course.init(
    {
      name: DataTypes.TEXT,
      desc: DataTypes.TEXT,
      url: DataTypes.TEXT,
      companyId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      format: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      duration: DataTypes.INTEGER,
      freezed: DataTypes.BOOLEAN,
      givesDiplom: DataTypes.BOOLEAN,
      img: DataTypes.TEXT,
      needToModerate: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
