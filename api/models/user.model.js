import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw272fQB8emSmPzJTSBiatm1&ust=1701842087169000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCPiIx_rN94IDFQAAAAAdAAAAABAE",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
