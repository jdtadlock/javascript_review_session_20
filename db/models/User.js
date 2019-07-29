const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let UserSchema = new Schema({

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    this.updatedAt = Date.now();
    next();
});

UserSchema.pre('update', function () {
    this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
});

UserSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
});

const User = mongoose.model('User', UserSchema);

User.prototype.validatePassword = function (val) {
    return bcrypt.compareSync(val, this.password);
}

/** @name db.User */
module.exports = User;
