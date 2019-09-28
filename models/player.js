const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    displayName: String,
    ranking: Number,
    position: String,
    team: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model('Player', PlayerSchema);