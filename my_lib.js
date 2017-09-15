
(function() {
	const uuid = require('uuid/v4');
	module.exports.string_uuid = function() {
		var str = uuid();
		var result = str.replace(/\-/g, '');
		console.log(result);
	}

	const crypto = require('crypto');

	module.exports.string_hex = function(bytes) {
		var token = crypto.randomBytes(bytes).toString('hex');
		console.log(token);
	}
	module.exports.string_hex_array = function(bytes) {
		var hex = crypto.randomBytes(bytes);

	    var result = "{ ";
	    var hexLength = hex.length;
		for (var i = 0; i < hexLength; ++ i) {
			var s = hex.toString('hex', i, i + 1);
			if ( i != 0) {
				result += ", ";
			}
			result += "0x" + s.toUpperCase();
		}
		result += " }";
		console.log(result);
	}

	const srs = require('secure-random-string');
	module.exports.string_secure_random = function(length) {
		var str = srs({length: length});
		console.log(str);
	}
}());


