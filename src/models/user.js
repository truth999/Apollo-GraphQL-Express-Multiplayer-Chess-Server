import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import isEmail from 'validator/lib/isEmail';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 6
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [isEmail, 'Email is not valid']
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 42
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  role: {
    type: String
  }
});

UserSchema.statics.findByUsernameOrEmail = async function findByUsernameOrEmail(usernameOrEmail) {
  let user = await this.findOne({
    username: usernameOrEmail
  });

  if (!user) {
    user = await this.findOne({ email: usernameOrEmail });
  }

  return user;
};

UserSchema.pre('save', async function preSave() {
  this.password = await this.encryptPassword(this.password);
});

UserSchema.methods.encryptPassword = async function encryptPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

UserSchema.methods.validatePassword = async function validatePassword(password) {
  return bcrypt.compare(password, this.password);
};

// eslint-disable-next-line new-cap
const User = new mongoose.model('User', UserSchema);

export default User;
