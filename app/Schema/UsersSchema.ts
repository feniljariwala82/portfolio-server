import mongoose, { Schema } from '@ioc:Mongoose'
import { DateTime } from 'luxon'

var validateEmail = function (email: any) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return re.test(email)
}

export const UsersSchema = new Schema({
  first_name: {
    type: String,
    required: [true, 'First name is required'],
    lowercase: true,
    trim: true,
  },

  last_name: {
    type: String,
    required: [true, 'Last name is required'],
    lowercase: true,
    trim: true,
  },

  full_name: {
    type: String,
    required: [true, 'Full name is required'],
    lowercase: true,
    trim: true,
    default: function () {
      return this.first_name + ' ' + this.last_name
    },
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
    minlength: [8, 'Password should be 8 characters long'],
  },

  created_at: {
    type: DateTime,
    default: DateTime.now(),
  },

  updated_at: {
    type: DateTime,
    default: DateTime.now(),
  },
})

export default mongoose.model('users', UsersSchema)
