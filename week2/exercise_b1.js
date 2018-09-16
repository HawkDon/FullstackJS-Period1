//b
const crypto = require('crypto');

const numbers = [48, 40, 32];
function asyncfunction1(numbers){
    crypto.randomBytes(numbers[0], function (err, buffer) {
        var number = buffer.toString("hex");
        console.log(number)
    })
    function asyncfunction2(numbers) {
        crypto.randomBytes(numbers[1], function (err, buffer) {
            var number = buffer.toString("hex");
            console.log(number)
        })
        function asyncfunction3(numbers) {
            crypto.randomBytes(numbers[2], function (err, buffer) {
                var number = buffer.toString("hex");
                console.log(number)
            })
        }
        asyncfunction3(numbers)
    }
    asyncfunction2(numbers);
}

asyncfunction1(numbers);