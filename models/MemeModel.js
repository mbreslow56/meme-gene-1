var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var memeSchema = new Schema ({
  // name: {type: String},
  // text: {type: String},
  // waterMark: {type:String}, //might need it's own sub model for size:number, text:string, use: boolean
  image: {type: String}
});

var Meme = mongoose.model("Meme", memeSchema);

module.exports = Meme;