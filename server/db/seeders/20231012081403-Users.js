const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const bestPassword = await bcrypt.hash("123", 10);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          email: "admin@admin",
          password: bestPassword,
          type: "Admin",
        },
        {
          username: "Эльбрус буткемп",
          email: "info@elbrusboot.camp",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "Яндекс Практикум",
          email: "practicum@yandex.ru",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "АртИнтроВерт",
          email: "info@artforintrovert.ru",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "SMM.school",
          email: "info@smm.school",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "Skillbox",
          email: "hello@skillbox.ru",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "Contented",
          email: "hello@contented.ru",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "Кондитерская онлайн школа",
          email: "olga@radostisladosti.ru",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "Сотка - онлайн школа егэ и огэ",
          email: "sotkaschoolonline@gmail.com",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "Умскул",
          email: "pr@umschool.ru",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "skyeng",
          email: "ceo@skyeng.ru",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "danco",
          email: "info@danco-studio.ru",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "GO Danco",
          email: "studio@go-dance.com",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "Страдариум",
          email: "hello@stradarium.ru",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "Культура речи",
          email: "info@kultura-rechi.ru",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "Skill Cup",
          email: "hello@skillcup.ru",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "Нетология",
          email: "support@netology.ru",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "Controforma",
          email: "hey@controforma.school",
          password: bestPassword,
          type: "Course",
        },
        {
          username: "ВШЭ",
          email: "hse@hse.ru",
          password: bestPassword,
          type: "Course",
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    //   /
    //   Add commands to revert seed here.
    //    *
    //   Example:
    //   await queryInterface.bulkDelete('People', null, {});
    //    */
  },
};
