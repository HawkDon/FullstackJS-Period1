var crypto = require('crypto');
module.exports = function callSix(number) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            crypto.randomBytes(number, function(err, buffer) {
                if(resolve) {
                    let secureHex = buffer.toString("hex");
                    resolve(secureHex);
                } else {
                    reject("Woops");
                }
        })
    }, 0);
})
}