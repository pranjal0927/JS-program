function main() {
    let a = 1
    let b = 30
    let count = 0

    for (let i = a; i <= b; i++) {
        if (isPrime(i)) 
            {
                count++
                if (count >= 1) {
                    console.log(i)                  
                }
            }
        }
    } 
function isPrime(n) {
    if (n < 1) return false

    for (let i = 2; i < n; i++) {
    if (n % i == 0)
        return false
    }
        return true
}
main()

