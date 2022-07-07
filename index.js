/* let arrai = ['uno',2,null,0];

function print(arrai)
{
  for(i=0; i < arrai.length; i++)
  {
    console.log(arrai[i])
  }
}

print(arrai); */


/* let arrai = [90,89,80,23,20]

function aprob(arrai)
{
  let result = arrai.filter(arrai => arrai>=70);
  console.log(result);
}
aprob(arrai);
 */


/* 
let contar = (["mexicano", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano","mexicano", "peruano", "argentino"]);

function counter(contar) {
  let contM = 0;
  let contA = 0;
  let contV = 0;
  let contP = 0;
  for (i = 0; i < contar.length; i++) {
    switch (contar[i]) {
      case ("mexicano"):
        contM = contM + 1;
        break
      case ("argentino"):
        contA = contA + 1;
        break
      case ("venezolano"):
        contV = contV + 1;
        break
      case ("peruano"):
        contP = contP + 1;
        break
    }
  }
  console.log("Cantidad argentinos: ",contA," Cantidad Mexicanos: " ,contM, "Cantidad venezolanos : ",contV, "Cantidad peruanos ",contP)
}

counter(contar)

 */







/*  let name = window.prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
let ocupacion = window.prompt("Ingrese su ocupacion");


function show(nameU,edadU,ocupacionU)
{
  person = {
    nombre: "",
    edad: 0,
    ocupacion: ""
  }
  person.nombre=nameU;
  person.edad=edadU;
  person.ocupacion=ocupacionU;
  console.log(person);
}

show(name,edad,ocupacion)

 */



let infolibros = [];

const addbook = (titulo, autor) => {
  let libros = {
    titulo: titulo,
    autor: autor
  };
  infolibros.push(libros)
}

const imprBook = () => {
  console.log(infolibros)
}
