import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const accountsScheme = new mongoose.Schema(
  {
    partnerid: String,
    avatar: {
      type: String,
      default: "/avatar/user.png",
    },
    firstname: { type: String, default: "" },
    lastname: { type: String, default: "" },
    email: {
      type: String,
      unique: true,
    },
    mobile: { type: String, default: "" },
    password: { type: String },
    role: {
      type: String,
      default: "user",
    },
    address: String,
    country: String,
    gold: { type: String, default: "Gold Assets" },
    amount: { type: String, default: "0" },
    created: String,
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

delete mongoose.models.Accounts;

const Accounts =
  mongoose.models.Accounts || mongoose.model("Accounts", accountsScheme);
export default Accounts;
