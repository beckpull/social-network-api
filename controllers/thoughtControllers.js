const { Thought } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.status(200).json(thoughts);
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID found." });
      }

      res.status(200).json(thought);
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      res.status(200).json(newThought);
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!updatedThought) {
        return res.status(404).json({ message: "No thought with that ID found." });
      }

      res.status(200).json(updatedUser);

    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!deletedThought) {
        return res.status(404).json({ message: "No thought with that ID found." });
      }

      res.status(200).json(deletedThought);

    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async addReaction(req, res) {
    try {
      
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
  async removeReaction(req, res) {
    try {
      
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },
};