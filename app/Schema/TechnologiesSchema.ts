import mongoose, { Schema } from '@ioc:Mongoose'
import { DateTime } from 'luxon'

export const TechnologiesSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    lowercase: true,
    trim: true,
  },

  description: {
    type: String,
    required: [true, 'Description is required'],
    lowercase: true,
    trim: true,
  },

  reference_url: {
    type: String,
    required: [true, 'Reference url is required'],
    trim: true,
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

export default mongoose.model('technologies', TechnologiesSchema)
