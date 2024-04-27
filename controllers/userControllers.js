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
      const user = await User.findOne({ _id: req.params.d })
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      
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


// find and remove all associated sweepstakes
Sweepstakes.find({client_id: client._id}).remove();

// find and remove all submissions
Submission.find({client_id: client._id}).remove();

client.remove();