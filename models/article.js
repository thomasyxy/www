"use strict";

module.exports = {
  title: String,
  date: Date,
  content: String,
  like: Number,
  cover: String,
  type: String,
  theme: String,
  createDate: Date,
  updateDate: Date,
  tag: [
    {
      name: String,
      color: String
    }
  ]
}
