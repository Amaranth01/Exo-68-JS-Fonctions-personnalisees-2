let a = document.getElementsByTagName('p');

function randomNumber () {

    return Math.trunc(Math.random()*100);
}

for (let i = 0; i < 10; i++) {
   a[i].innerHTML = randomNumber().toString();
}