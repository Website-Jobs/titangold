import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const {AutoIncrementID} =  require("@typegoose/auto-increment");

const partnersScheme = new mongoose.Schema(
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
        address: String,
        country: String,
        enabled: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

delete mongoose.models.Partners;

partnersScheme.plugin(AutoIncrementID, {field: 'accid'});
const Partners = mongoose.models.Partners || mongoose.model('Partners', partnersScheme);
export default Partners;
