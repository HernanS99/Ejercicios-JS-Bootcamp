/* 1er ejercicio */


/* function pares (){
    for (let i = 2; i <= 12; i++) {
        if (i % 2 == 0) {
          console.log(i);1
        }
        
      }
}
pares(); */




/* 2do ejercicio */


let cal1 = parseInt(prompt("Ingrese su 1ra califacion del 10 al 100"));
let cal2 = parseInt(prompt("Ingrese su 2da califacion del 10 al 100"));
let cal3 = parseInt(prompt("Ingrese su 3ra califacion del 10 al 100"));
let cal4 = parseInt(prompt("Ingrese su 4ta califacion del 10 al 100"));
let cal5 = parseInt(prompt("Ingrese su 5ta califacion del 10 al 100"));

calprom(cal1, cal2, cal3, cal4, cal5);

function calprom(cal1, cal2, cal3, cal4, cal5) {
  let resul = (cal1+cal2+cal3+cal4+cal5)/5;
  let text ="";
  if(resul>=70)
  {
      text = "usted aprobo con nota: ";
      console.log(text+""+resul);
  }else{
      text = "usted reprobo con nota: ";
      console.log(text+""+resul);
  }
}




























