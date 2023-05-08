const container = document.querySelector('#container');
const p = document.createElement("p");
p.classList.add("red");
const h3 =document.createElement("h3");
h3.classList.add("blue");
p.textContent="Hey Im red!";
h3.textContent="Im a blue h3!";
container.appendChild(p);
container.appendChild(h3);
const div = document.createElement("div");
div.classList.add("complex");
const pin = document.createElement("p");
const h1 = document.createElement("h1");
h1.textContent="Im in a div";
pin.textContent="ME TOO";
div.appendChild(h1);
div.appendChild(pin);
container.appendChild(div);

btn.addEventListener('click', function (e) {
    console.log(e);
  });