import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: false,
  },
  dob: {
    type: Date,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  college: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
  intrest: {
    type: Array,
    required: false,
    default: [],
  },
  projects: {
    type: Array,
    required: false,
    default: [],
  },
  experience: {
    type: String, // need to be changed
    required: false,
  },
  vdic: {
    type: String, // need to be changed
    required: false,
  },
  followers: {
    type: Array,
    default: [],
  },
  followings: {
    type: Array,
    default: [],
  },
  tokens: [
    {
      token: {
        type: String,
        // required:true
      },
    },
  ],
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});
userSchema.methods.generateAuthToken = async function () {
  try {
    let token1 = jwt.sign(
      { id: this._id, email: this.email },
      process.env.SECRETKEY
    );
    this.tokens = this.tokens.concat({ token: token1 });
    await this.save();
    return token1;
  } catch (error) {
    console.log(error);
  }
};
const userModel = mongoose.model("Users", userSchema);
export default userModel;
