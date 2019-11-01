const mongoose = require('./db');
// const { BusinessCard } = require('./BusinessCard')

const UsersSchema = new mongoose.Schema({
    id: String, 
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    names: [String]
    // UserBC: BusinessCard,
    // ListBC: [BusinessCard]
})

// export const Users = mongoose.model('Users', UsersSchema);

module.exports = {
    Users: mongoose.model('Users', UsersSchema, 'Users')
  };