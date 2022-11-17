const { Post } = require("../models");

const postData = [
  {
    title: "CDL Moshpit Delayed!",
    content:
      'Treyarch Studios has just announced that the "CDL Moshpit" playlist will be delayed in multiplayer as the developers are troubleshooting bugs in the software for custom loadouts and map rotation',
    user_id: 1,
  },
  {
    title: "iPhone 14 Pro Max Back Order",
    content:
      "With the shut down of the manufacturing facility in ZhengZhou, it seems the Eastern part of the world is experiencing heavy shortages and back-ordered availability on Apple's latest iPhone model.",
    user_id: 2,
  },
  {
    title: "Turtle Gang",
    content: "I like Tortles",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;