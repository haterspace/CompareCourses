const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate({ User, Course }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Course, { foreignKey: 'companyId' });
    }
  }
  Company.init(
    {
      name: DataTypes.STRING,
      desc: DataTypes.TEXT,
      address: DataTypes.STRING,
      contacts: DataTypes.STRING,
      img: DataTypes.TEXT,
      url: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Company',
    }
  );
  return Company;
};
