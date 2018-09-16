module.exports = function f(x,y,...rest) {
    console.log(`Sum is: ${x + y}`);
    console.log(`rest value 1 is a: ${typeof rest[0]}`);
    console.log(`rest value 2 is a: ${typeof rest[1]}`);
    console.log(`rest value 3 is a: ${typeof rest[2]}`);
    if(rest[3] instanceof Array){
        console.log(`rest value 4 is a: Array`);
    }
    if(rest[4] instanceof Date){
        console.log(`rest value 5 is a: Date`);
    }
    console.log(`rest value 6 is a: ${typeof rest[5]}`);
}