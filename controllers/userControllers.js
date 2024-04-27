const { User, Thought } = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.d }).populate('thoughts', 'friends');

      if (!user) {
        return res.status(404).json({ message: "No thought with that ID found." });
      }

      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
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

    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndDelete({ _id: req.params.userId });
      // find and remove all associated thoughts
      const deletedThoughts = await Thought.find({ userId: User._id }).remove();

      if (!deletedUser) {
        return res.status(404).json({ message: "No user with that IF found." });
      }

      res.status(200).json({ deletedUser: deletedUser, deletedThoughts: deletedThoughts});

    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async removeFriend(req, res) {
    try {
      
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  }
};
