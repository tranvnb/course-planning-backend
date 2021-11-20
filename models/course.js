const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
    url: {
        type: Schema.Types.String,
        required: [true, "Please provide url"]
    },
    course_code: {
        type: Schema.Types.String,
        required: [true, "Course Code is required"]
    },
    title: {
        type: Schema.Types.String,
        required: [true, "Title is required"]
    },
    credit: {
        type: Schema.Types.String,
        require: false
    },
    prerequisitesStr: {
        type: Schema.Types.String,
        required: false
    },
    prerequisites: [[]]
});


const Course = model('Course', courseSchema);

module.exports = { Course };
