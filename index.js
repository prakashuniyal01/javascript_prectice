//  object literal
let prakash = {
    firstname: "prakash",
    lastname: "rawat",
    birthyear: 1999,
    family:['prakash','maa', 'papa'],
    job: 'development',
    married: false
};

console.log(prakash);
console.log(prakash.family);
let x = prakash["family"];
console.log(x);
console.log(typeof(x));