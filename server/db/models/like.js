const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ Course, User }) {
      this.belongsTo(Course, { foreignKey: "courseId" });
      this.belongsTo(User, { foreignKey: "userId" });
    }
  }
  Like.init(
    {
      userId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
