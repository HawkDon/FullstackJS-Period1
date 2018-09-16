var export_d1 = require("./export_d1");

const objectRandoms = {
    title: "6 Secure Randoms",
    randoms: []
}

Promise.all([
    export_d1(48),
    export_d1(40),
    export_d1(32),
    export_d1(24),
    export_d1(16),
    export_d1(8)
]).then(res => {
    for(var i = 0; i< res.length; i++) {
        objectRandoms.randoms.push(res[i]);
    }
    console.log(objectRandoms);
})

