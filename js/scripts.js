// Stampo in console tutti i numeri da 1 a 100 in sequenza

for (let i = 1; i <= 100; i++) {

    // Se il numero è un multiplo di 3 E di 5, stampo in console "FizzBuzz"

    if (i % 3 === 0 & i % 5 === 0) {
        console.log('FizzBuzz');
    }

    // Se il numero è un multiplo di 5, stampo in console "Fizz"

    else if (i % 5 === 0) {
        console.log('Fizz');
    }

    // Se il numero è un multiplo di 3, stampo in console "Buzz"

    else if (i % 3 === 0) {
        console.log('Buzz');
    }

    // Se il numero non rispetta i precedenti requisiti, viene stampato normalmente in console

    else {
        console.log(i);
    }
}