//C
const crypto = require('crypto');

const objectRandoms = {
    title: "6 Secure Randoms",
    randoms: []
}

function callSix(number) {
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

Promise.all([
    callSix(48),
    callSix(40),
    callSix(32),
    callSix(24),
    callSix(16),
    callSix(8)
]).then(res => {
    for(var i = 0; i< res.length; i++) {
        objectRandoms.randoms.push(res[i]);
    }
    console.log(objectRandoms);
})