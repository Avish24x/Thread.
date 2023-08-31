import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, require: true },
  username: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  image: String,
  bio: String,
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],  //user can have many threads 
  onboarded: {
    type: Boolean,
    default: false,
  },
  communities: [  //one user can belong to many commnunities 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "community", //reference to community DB
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
