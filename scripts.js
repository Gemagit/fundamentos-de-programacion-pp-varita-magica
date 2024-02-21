//1-Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

let arrayDeAs = document.getElementsByTagName("a");

for (let i = 0; i < arrayDeAs.length; i++) {
  arrayDeAs[i].href = "#";
}

//2-Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

let imagenes = document.getElementsByTagName("img");

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("click", function () {
    imagenes[i].src = "./assets/magic-1.gif";
  })
};

//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].style.background = "red";
  parrafos[i].style.color = "pink";
}

//2.3 Bloques de article o section: Cambia el color de fondo.

let article = document.getElementsByTagName("article");

for (let i = 0; i < article.length; i++) {
  article[i].style.background = "blue";
}

//Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.
//3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

const imgOriginal = [];
for (let i = 0; i < imagenes.length; i++) {
  imgOriginal[i] = imagenes[i].src;
}

for (let i = 0; i < imagenes.length; i++) {

  imagenes[i].addEventListener("mouseover", function () {
    imagenes[i].src = getRandom(gifs);
  });

  imagenes[i].addEventListener("mouseout", function () {
    imagenes[i].src = imgOriginal[i]; // No funciona porque envía fuera de local
    //imagenes[i].src = "index_files/IMG_0545.jpg"; // A capón sí funciona
  });
}


//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const parrafoOriginal = [];
for (let i = 0; i < parrafos.length; i++) {
  parrafoOriginal[i] = parrafos[i].style.color ;
}

for (let i = 0; i < parrafos.length; i++) {

  parrafos[i].addEventListener("mouseover", function () {
    parrafos[i].style.color = "green";
    parrafos[i].style.background = "purple";
  });

  parrafos[i].addEventListener("mouseout", function () {
    parrafos[i].style.background = parrafoOriginal[i];
    parrafos[i].style.color = parrafoOriginal[i];

  });
}


//3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

const articleOriginal = [];
for (let i = 0; i < article.length; i++) {
articleOriginal[i] = article[i].style.color ;
}

for (let i = 0; i < article.length; i++) {

  article[i].addEventListener("mouseover", function () {
    article[i].style.color = "darkblue";
    article[i].style.background = "teal";
  });

  article[i].addEventListener("mouseout", function () {
    article[i].style.background = articleOriginal[i];
    article[i].style.color = articleOriginal[i];

  });
}


//4-Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

function getRandom(arrayValores) {
  let numAgraciado = Math.floor(Math.random() * arrayValores.length);
  return arrayValores[numAgraciado];
}

//5-Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.


let paletaAleatoria = ["#223843", "#85BA6A", "#E9DF17", "#E92517"];
console.log(getRandom(paletaAleatoria));

//6-Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.

let gifs = ["assets/magic-1.gif", "assets/magic-2.gif", "assets/magic-4.gif", "assets/magic-5.gif"];
console.log(getRandom(gifs));
