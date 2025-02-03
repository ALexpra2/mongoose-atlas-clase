const mongoose = require('mongoose');

//mongoose.Schema:Se usa para definir la estructura de los documentos en una colección de MongoDB.
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
}, { timestamps: true }); 

// Añade do lineas a cada documento, 
// createdAt: almacena la fecha y hora en que se creó el documento.                            
// updatedAt: almacena la fecha y hora en que el documento fue actualizado por última vez.

const User = mongoose.model('User', UserSchema);

//Crea un modelo llamado "User" basado en el esquema definido (UserSchema).

module.exports = User;