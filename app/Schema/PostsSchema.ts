import mongoose, { Schema } from '@ioc:Mongoose'
import { DateTime } from 'luxon'
import { TechnologiesSchema } from 'App/Schema/TechnologiesSchema'

export const PostsSchema = new Schema({
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
    minlength: 100,
  },

  image_name: {
    type: String,
    required: [true, 'Image name is required'],
    lowercase: true,
    trim: true,
  },

  image_url: {
    type: String,
    required: [true, 'Image url is required'],
    lowercase: true,
    trim: true,
  },

  video_url: {
    type: String,
    required: false,
    lowercase: true,
    trim: true,
  },

  technologies: {
    type: [TechnologiesSchema],
    required: [true, 'Technologies is required'],
  },

  github_url: {
    type: String,
    required: [true, 'Github url is required'],
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

export default mongoose.model('posts', PostsSchema)
