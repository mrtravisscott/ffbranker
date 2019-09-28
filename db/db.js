// This is where we will set up our db connection
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI || 'mongodb://localhost/moviesOne';
console.log('URI: ', uri);
// food is the name of our database
// that is automatically created
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
    console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconncted', () => {
    console.log('Mongoose is disconnected')
});