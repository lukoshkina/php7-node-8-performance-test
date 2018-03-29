const start = 999;
const end = 99;

function isSimple(number) {
    let limit = Math.floor(number / 2);
    for (let i = 2; i <= limit; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function isPalindrome(number) {
    let origin = number.toString();
    let reverse = origin.split("").reverse().join("");
    return parseInt(origin) === parseInt(reverse);
}

function main() {
    let arg1 = start;
    let arg2 = start;
    let palindrome = 1;
    for (let i = start; i > end; i--) {
        if (isSimple(i)) {
            for (let j = i; j > end; j--) {
                if (i === j || isSimple(j)) {
                    if (isPalindrome(i * j) && palindrome < (i * j)) {
                        palindrome = i * j;
                        arg1 = i;
                        arg2 = j;
                    }
                }
            }
        }
    }

    return [arg1, arg2, palindrome];
}

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    let time = (Date.now() / 1000);

    res.end(JSON.stringify({
        result: main(),
        time: (((Date.now() / 1000) - time) + ' sec')
    }));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});