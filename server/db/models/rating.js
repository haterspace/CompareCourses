const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate({ Course, User }) {
      this.belongsTo(Course, { foreignKey: "courseId" });
      this.belongsTo(User, { foreignKey: "userId" });
    }
  }
  Rating.init(
    {
      userId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
      rate: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Rating",
    }
  );
  return Rating;
};
