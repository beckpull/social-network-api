const { Schema, ObjectId, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: [true, "thought text required"],
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: function() {
            //     return `${createdAt}`;
            // }
        },
        username: {
            type: String,
            required: [true, "thought username required"],
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        }
    }
);

thoughtSchema.virtual('reactionCount')
.get(function () { // ASYNC IF NEED AWAIT
    const numReactions = { $count: this.friends };
    return numReactions;
    // const reactionCount = await this.model('user').countDocuments({ friends: this._id });
    // return reactionCount;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;