const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Grass is green",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "The Earth is Flat",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "MW2 DMZ is trash",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
