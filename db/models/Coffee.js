const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let CoffeeSchema = new Schema({
    name: String, // Columbian, Original
    type: String, // Dark, Medium, Light,
    shopId: { type: Schema.Types.ObjectId, ref: 'Shop' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

CoffeeSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

CoffeeSchema.pre('update', function () {
    this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
});

CoffeeSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
});



/** @name db.Coffee */
module.exports = mongoose.model('Coffee', CoffeeSchema);
