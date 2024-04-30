const { Thought, User } = require('../models');
const reactionSchema = require('../models/Thought')

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.status(200).json(thoughts);
    } catch (err) {
      console.log(err);
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
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      const username = newThought.username;
      const updatedUser = await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { 'thoughts': newThought._id } },
        { runValidators: true, new: true }
      );
      res.status(200).json({ newThought: newThought, updatedUser: updatedUser });
    } catch (err) {
      console.log(err);
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

      res.status(200).json(updatedThought);

    } catch (err) {
      console.log(err);
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

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async addReaction(req, res) {
    try {
      const { reactionBody, username } = req.body;
      // console.log("Reaction Body:", reactionBody);
      // console.log("Username:", username);

      const newReaction = { reactionBody, username };
      // console.log("New Reaction:", newReaction);

      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: newReaction } },
        { runValidators: true, new: true }
      );
      // console.log("Updated Thought:", updatedThought);

      if (!updatedThought) {
        return res.status(404).json({ message: "No thought with that ID found to react to." });
      }

      res.status(200).json(updatedThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateReaction(req, res) {
    try {
      const { reactionBody, username } = req.body;

      // Extract thoughtId and reactionId from request parameters
      const { thoughtId, reactionId } = req.params;

      // Construct the new reaction object
      const newReaction = { reactionBody, username };

      // Update the thought with the specified reactionId
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: thoughtId, "reactions.reactionId": reactionId }, // Use "reactions.reactionId" to match the specific reaction by its ID
        { $set: { "reactions.$": newReaction } },
        { runValidators: true, new: true }
      );

      if (!updatedThought) {
        return res.status(404).json({ message: "No thought or reaction with that ID found." });
      }

      res.status(200).json(updatedThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateReaction(req, res) {
    try {
      const { reactionBody, username } = req.body;

        const { thoughtId, reactionId } = req.params;

        const newReaction = { reactionBody, username };

        const updatedThought = await Thought.findOneAndUpdate(
            { _id: thoughtId, "reactions.reactionId": reactionId },
            { $set: { "reactions.$": newReaction } },
            { runValidators: true, new: true }
        );

        if (!updatedThought) {
            return res.status(404).json({ message: "No thought or reaction with that ID found." });
        }

        res.status(200).json(updatedThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async removeReaction(req, res) {
    try {
      const { reactionId } = req.body;
      const removedReaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { 'reactions': { reactionId: reactionId } } },
        { runValidators: true, new: true }
      );

      if (!removedReaction) {
        res.status(404).json({ message: "Either the thought ID or reaction ID is incorrect." })
      }

      res.status(200).json(removedReaction);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};