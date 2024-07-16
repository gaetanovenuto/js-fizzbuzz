const container = document.querySelector(".container");


// Stampo in console tutti i numeri da 1 a 100 in sequenza

for (let i = 1; i <= 700; i++) {
    
    const Box = document.createElement("div");
    Box.classList.add("bg-lightblue", "box");
    container.append(Box);
    

    // Se il numero è un multiplo di 3 E di 5, stampo in console "FizzBuzz"

    if (i % 3 === 0 & i % 5 === 0) {
        console.log('FizzBuzz');
        Box.append("FizzBuzz");
        Box.classList.replace("bg-lightblue","bg-red");
        Box.addEventListener('click',
            function() {
                const layover = document.getElementById('layover');
                layover.style.display = 'block';
                document.getElementById('title').innerHTML = "FizzBuzz";
                layover.addEventListener('click',
                    function() {
                        layover.style.display = 'none';
                    }
                )
            }
        )
    }

    // Se il numero è un multiplo di 5, stampo in console "Fizz"

    else if (i % 5 === 0) {
        console.log('Fizz');
        Box.append("Fizz");
        Box.classList.replace("bg-lightblue","bg-lightgreen");
        Box.addEventListener('click',
            function() {
                const layover = document.getElementById('layover');
                layover.style.display = 'block';
                document.getElementById('title').innerHTML = "Fizz";
                layover.addEventListener('click',
                    function() {
                        layover.style.display = 'none';
                    }
                )
            }
        )
    }

    // Se il numero è un multiplo di 3, stampo in console "Buzz"

    else if (i % 3 === 0) {
        console.log('Buzz');
        Box.append("Buzz");
        Box.classList.replace("bg-lightblue","bg-yellow");
        Box.addEventListener('click',
            function() {
                const layover = document.getElementById('layover');
                layover.style.display = 'block';
                document.getElementById('title').innerHTML = "Buzz";
                layover.addEventListener('click',
                    function() {
                        layover.style.display = 'none';
                    }
                )
            }
        )
    }

    // Se il numero non rispetta i precedenti requisiti, viene stampato normalmente in console

    else {
        console.log(i);
        Box.append(i);
        Box.addEventListener('click',
            function() {
                const layover = document.getElementById('layover');
                layover.style.display = 'block';
                document.getElementById('title').innerHTML = i;
                layover.addEventListener('click',
                    function() {
                        layover.style.display = 'none';
                    }
                )
            }
        )
    }
}