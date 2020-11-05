const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: String,
    status: String,
});

todoSchema.statics.getAll = function(p, n) {
    return this.find().skip((p-1)*n).limit(n).lean();
}

module.exports = mongoose.model('Todo', todoSchema);
