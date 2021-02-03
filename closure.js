function stopWatch(){
    let i=0;
    return function inc(){
        i++;
        return i;
    }
}

const clock1=stopWatch();
const clock2=stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());
