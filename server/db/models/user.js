const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({
      Comment,
      CommentComplaint,
      Company,
      CourseComplaint,
      Like,
      Rating,
      OtherCourses,
      JobCourses,
    }) {
      this.hasMany(Comment, { foreignKey: 'userId' });
      this.hasMany(CommentComplaint, { foreignKey: 'userId' });
      this.hasOne(Company, { foreignKey: 'userId' });
      this.hasMany(CourseComplaint, { foreignKey: 'userId' });
      this.hasMany(Like, { foreignKey: 'userId' });
      this.hasMany(Rating, { foreignKey: 'userId' });
      this.hasMany(OtherCourses, { foreignKey: 'userId' });
      this.hasMany(JobCourses, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      type: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
