const { User, Thought } = require('../models');
const { Schema, Types, ObjectId } = require('mongoose')

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find().populate('thoughts').populate('friends');
      res.status(200).json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).populate('thoughts').populate('friends');

      if (!user) {
        return res.status(404).json({ message: "No user with that ID found." });
      }

      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "No user with that ID found." });
      }

      res.status(200).json(updatedUser);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndDelete({ _id: req.params.userId });
      if (!deletedUser) {
        return res.status(404).json({ message: "No user with that ID found." });
      }
      const deletedThoughts = await Thought.deleteMany({ username: deletedUser.username },{ runValidators: true, new: true });

      res.status(200).json({ deletedUser: deletedUser, deletedThoughts: deletedThoughts });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const { userId } = req.params;
      const { friendId } = req.body;

      // Check if friendId is a valid ObjectId
      if (!Types.ObjectId.isValid(friendId)) {
        return res.status(400).json({ message: "Invalid friendId provided." });
      }

      // Find the user by userId
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      // Check if the friend already exists in the user's friends list
      if (user.friends.includes(friendId)) {
        return res.status(400).json({ message: "Friend already exists in the user's friends list." });
      }

      // Add the friend to the user's friends list
      user.friends.push(friendId);
      await user.save();

      res.status(200).json(user);
    } catch (error) {
      console.error("Error adding friend:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  },
  async removeFriend(req, res) {
    try {
      const removedFriend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: req.body },
        { runValidators: true, new: true }
      );

      if (!removedFriend) {
        return res.status(404).json({ message: "Either user ID or friend's user ID is incorrect." });
      }

      res.status(200).json(removedFriend);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};
