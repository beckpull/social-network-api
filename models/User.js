const { Schema, ObjectId, model } = require('mongoose');
// const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: [true, "user username required"],
            trim: true
        },
        email: {
            type: String,
            isEmail: true,
            required: [true, "user email required"],
            unique: true
        },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        }
    }
);

userSchema.virtual('friendCount')
.get(function () { // ASYNC IF NEED AWAIT
    const numFriends = { $count: this.friends };
    return numFriends;
    // const friendCount = await this.model('user').countDocuments({ friends: this._id });
    // return friendCount;
});

const User = model('user', userSchema);

module.exports = User;