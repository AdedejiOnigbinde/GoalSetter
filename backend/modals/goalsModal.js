const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Add A Tex Value']
    },
},
    {
        timestamps: true,
    })

module.exports = mongoose.model('Goal', goalSchema);