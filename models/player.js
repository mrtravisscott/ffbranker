const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    Name: String,
    ranking: Number,
    Position: String,
    Team: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model('Player', PlayerSchema);