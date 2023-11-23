const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CommentComplaint extends Model {
    static associate({ User, Comment }) {
      this.belongsTo(Comment, { foreignKey: "commentId" });
      this.belongsTo(User, { foreignKey: "userId" });
    }
  }
  CommentComplaint.init(
    {
      userId: DataTypes.INTEGER,
      commentId: DataTypes.INTEGER,
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CommentComplaint",
    }
  );
  return CommentComplaint;
};
