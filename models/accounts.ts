import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const {AutoIncrementID} =  require("@typegoose/auto-increment");

const accountsScheme = new mongoose.Schema(
    {
        accid: {
            type: Number,
            unique:true
        },
        avatar: {
            type: String,
            default:'/avatar/user.png'
        },
        firstname: { type: String, default: '' },
        lastname: { type: String, default: '' },
        email: {
            type: String,
            unique: true,
        },
        mobile: { type: String, default: '' },
        password: { type: String, default: '' },
        role: {
            type:String,
            default:'user'
        },
        partnerid:String,
        address: String,
        country: String,
        enabled: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

delete mongoose.models.Accounts;


accountsScheme.plugin(AutoIncrementID, {field: 'accid'});
const Accounts = mongoose.models.Accounts || mongoose.model('Accounts', accountsScheme);
export default Accounts;
