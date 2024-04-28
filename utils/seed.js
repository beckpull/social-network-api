const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThoughts, getReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let videoCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (videoCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [];
  const thoughts = getRandomThoughts(8);

  for (let i = 0; i < 8; i++) {
    const username = getRandomUsername();
    const email = `${username}@email.com`;

    users.push({
      username,
      email,
    });
  }

  await User.collection.insertMany(users);
  // const insertedUsers = await User.find();

  // // Assign a userId to each thought from the inserted users
  // const thoughtsWithUserId = thoughts.map((thought, index) => ({
  //   ...thought,
  //   userId: insertedUsers[index]._id // Assigning userId from the corresponding user
  // }));

  await Thought.collection.insertMany(thoughts);


  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
