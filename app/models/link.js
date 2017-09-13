var db = require('../config');
var crypto = require('crypto');
const mongoose = require('mongoose');


var LinkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  baseUrl: {
    type: String,
    required: true
  },
  code: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  visits: {
    type: Number,
    default: 0
  },
  user_id: {
    type: Number
  }
}, {timestamps: true})

module.exports = mongoose.model('Link', LinkSchema);



// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });
//
// module.exports = Link;
