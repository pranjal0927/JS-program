// // print strong number range for 0 - 1000

let num = 1000;

for (let i = 1; i <= num; i++) {
    let temp = i;
    let sum = 0;

    while (temp > 0) {
        let rem = temp % 10;

        let fact = 1;
        for (let j = 1; j <= rem; j++) {
            fact *= j;
        }

        sum += fact;
        temp = Math.trunc(temp / 10);
    }

    if (sum === i) {
        console.log(i);
    }
}

