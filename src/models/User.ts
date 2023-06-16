import bcrypt from 'bcryptjs';
import mongoose, { Date } from 'mongoose';
const { Schema } = mongoose;

interface UserModel {
  name: string;
  email: string;
  emailVerified: Date;
  password: string;
  image: string;
  favoriteIds: string[];
}

const userSchema = new Schema<UserModel>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please tell us your name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email address'],
      trim: true,
      unique: true,
      lowercase: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please enter a valid email address',
      ],
    },
    emailVerified: {
      type: Date,
    },
    password: {
      type: String,
      required: [true, 'Please provide your password'],
      minlength: 8,
      maxlength: 1024,
      select: false,
    },
    image: {
      type: String,
    },
    favoriteIds: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
