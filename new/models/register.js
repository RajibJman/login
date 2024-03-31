const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
<<<<<<< HEAD
=======
  
>>>>>>> ee9b51f910e5cbe7b5fdfd45d0041d917af97344
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    role: {
        type: String,
<<<<<<< HEAD
        enum: ['user', 'admin'],
        default: 'user'
    },
    checkreset: {
        type: Boolean,
        default: false
    },
    results: [{
        module_id: {
            type: mongoose.Schema.Types.ObjectId, // Corrected type to mongoose.Schema.Types.ObjectId
            ref: 'Module', // Reference to another schema, replace 'Module' with your actual module schema name
            required: false
        },
        marks: {
            type: Number,
            required: false
        }
    }],
    modules: [{
        module_id: {
            type: mongoose.Schema.Types.ObjectId, // Corrected type to mongoose.Schema.Types.ObjectId
            ref: 'Module', // Reference to another schema, replace 'Module' with your actual module schema name
            required: false
        }
    }]
=======
        enum: ['user', 'admin'], // Assuming two roles: user and admin
        default: 'user'
    }
>>>>>>> ee9b51f910e5cbe7b5fdfd45d0041d917af97344
});

module.exports = mongoose.model('Register', userSchema);
