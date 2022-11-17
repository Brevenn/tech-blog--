const { User } = require("../models");

const userData = [
  {
    username: "Chopper",
    password: "chopper",
  },
  {
    username: "Roranoa",
    password: "roranoa",
  },
  {
    username: "Kaido",
    password: "kaido",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
