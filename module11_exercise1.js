function isPrime(num) {
    if (!Number.isInteger(num) || num < 1 || num > 1000)
        return "данные неверны";
//let k = Math.sqrt(n);
    for (let i = 2; i <= 1000; i++)
        if (num % i === 0)
            return "не простое число";
    return "простое число";
}

console.log(isPrime(0));
console.log(isPrime(1));