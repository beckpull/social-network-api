const { Schema, model } = require('mongoose');

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
            get: (date)=> `${date.toLocaleDateString("en-US")} at ${date.toLocaleTimeString()}`
        },
        username: {
            type: String,
            required: [true, "thought username required"],
        },
        reactions: [reactionSchema],
        // userId: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'user',
        // }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount')
.get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;