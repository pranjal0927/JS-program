//0 - 1000 range of amstrong number

let num = 1000;

for (let i = 1; i <= num; i++) {
    let len = i.toString().length;
    let temp = i;
    let sum = 0;

    while (temp > 0) {
        let rem = temp % 10;
        sum += Math.pow(rem, len);
        temp = Math.trunc(temp / 10);
    }

    if (sum === i) {
        console.log(i);
    }
}   