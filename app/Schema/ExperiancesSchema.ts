import mongoose, { Schema } from '@ioc:Mongoose'
import constants from 'Config/constants'
import { DateTime } from 'luxon'

const { JOB, CERTIFICATION, COURSE, EDUCATION } = constants.experienceType

export const experiencesSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    lowercase: true,
    trim: true,
  },

  type: {
    type: String,
    required: [true, 'Experience type is required'],
    enum: {
      values: [JOB, CERTIFICATION, COURSE, EDUCATION],
      message: '{VALUE} is not a valid experience type',
    },
    lowercase: true,
    trim: true,
  },

  status: {
    type: String,
    required: [true, 'Current status is required'],
    lowercase: true,
    trim: true,
  },

  start_year: {
    type: Number,
    required: [true, 'Start year is required'],
    trim: true,
  },

  end_year: {
    type: Number,
    trim: true,
  },

  // link to linkedin
  reference_url: {
    type: String,
    required: true,
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

export default mongoose.model('experiences', experiencesSchema)
