let a = document.getElementsByTagName('p');

function randomNumber (max) {

    return Math.trunc(Math.random()*100);
}

let b = randomNumber()

for (let i = 0; i < 10; i++) {
   a[i].innerHTML = randomNumber().toString();
}