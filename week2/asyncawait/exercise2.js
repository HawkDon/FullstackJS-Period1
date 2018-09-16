var crypto = require("crypto");

function makeCrypto(number){
    const getValue = crypto.randomBytes(number, function (err, buffer) {
        var number = buffer.toString("hex");
        return number;
    })
    return getValue;
}

console.log(derp());