/**
 * Created by think on 2016/9/10.
 */
'use strict';

const crypto = require("crypto");
let helper ={}

helper.md5 = function(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}
module.exports = helper;