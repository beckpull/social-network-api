const { Schema, ObjectId } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: [true, "reaction body required"],
            max: 280,
        },
        username: {
            type: String,
            required: [true, "reaction username required"],
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: function () {
            //     return `${createdAt}`;
            // }
        }
    },
    {
        toJSON: {  
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;