var mongoose = require('mongoose'); // 引入的是mongoose
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema; // 利用mongoose下的Schema(架构、模型)
var ObjectId = Schema.ObjectId;

var HotSchema = new Schema({
    name: String,
    desc: String,
    commentCount: Number,
    cateId: ObjectId,
    cate: {},
    date: { type: Date, default: Date.now }
});

HotSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('hotplace', HotSchema);