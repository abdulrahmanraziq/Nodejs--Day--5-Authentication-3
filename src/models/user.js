import {mongoose} from './index.js';
import {validtionEmail} from '../common/validation.js';
import {validationMobile} from '../common/validation.js';

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, 'firstName is required']
    },

    lastName:{
        type:String,
        required:[true, 'lastName is required']
    },

    email:{
        type:String,
        required:[true, 'email is required'],
        validate:{
            validator: validtionEmail,
            message: props => `${props.value} is not a valid Email!`

        }
    },
    mobile:{
        type:String,
        required:[true, 'mobile is required'],
        validate:{
            validator: validationMobile,
            message:props => `${props.value} is not a valid Email!`
        }
    },
    password:{
        type:String,
        required:[true, 'password is required'],
        minlength:6
    },
    role:{
        type:String,
        enum: {
            values: ['User', 'Admin'],
            message: '{VALUE} is not supported'
          }
    },
    status:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    resetPasswordOtp: { type: Number },
    resetPasswordExpires: { type: Date },
}, {
    collection: 'user',
    versionKey:false
});

const userModal =  new mongoose.model('user', userSchema);

export default userModal