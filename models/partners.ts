import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const partnersScheme = new mongoose.Schema(
    {
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
        address: String,
        country: String,
        gold: String,
        total: Number,
        created: String,
        expires: String,
        enabled: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

delete mongoose.models.Partners;

const Partners = mongoose.models.Partners || mongoose.model('Partners', partnersScheme);
export default Partners;
