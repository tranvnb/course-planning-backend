const { Schema, model, Types } = require('mongoose');

const ProgramDetailSchema = new Schema({
    first_year: [Schema.Types.Mixed],
    second_year: Schema.Types.Mixed
});

const programSchema = new Schema({
    code: String,
    data: {
        type: ProgramDetailSchema,
    }
});


// const programSchema = new Schema({
//     first_year: [Schema.Types.Mixed],
//     second_year: Schema.Types.Mixed
// });

const Program = model('Program', programSchema);

module.exports = { Program };
