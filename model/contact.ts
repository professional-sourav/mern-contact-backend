import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        require: [true, 'Please add the name']
    },
    email: {
        type: String,
        require: [true, 'Please add the name']
    },
    phone: {
        type: String,
        require: [true, 'Please add the name']
    },
}, {
    timestamps: true
})

export default mongoose.model('Contact', contactSchema)