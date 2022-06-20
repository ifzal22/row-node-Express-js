const crypto = require('crypto');

const utilitis = {};
utilitis.parseJSON = (jsonString) => {
let output = {};
try {
    output = JSON.parse(jsonString);
} catch {
    output = {};
}
return output;
};

// HASH

utilitis.hash = (str) => {
    if (typeof (str === 'string' && str.length > 0)) {
const hash = crypto
.createHmac('sha256', 'fgxgfdsbhhtyggytytythw')
.update('if you node so much waht dont marry it')
.digest('hex');
return hash;
    }
    return false;
};
module.exports = utilitis;
