const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

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
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    ]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);


userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;