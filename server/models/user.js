import { Schema, model } from 'mongoose'

const schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    dateOfBirth: {
        type: Date,
        require: true,
    },
    password: {
        type: String,
        select: false,
        required: true,
    },
    role: {
        type: String,
        default: 'visitor',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const User = model('User', schema)
