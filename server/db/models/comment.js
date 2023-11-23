const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ Course, User, CommentComplaint }) {
      this.belongsTo(Course, { foreignKey: 'courseId' });
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(CommentComplaint, { foreignKey: 'commentId' });
    }
  }
  Comment.init(
    {
      userId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
      body: DataTypes.TEXT,
      needToModerate: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
