function calculaPromedio(calificaciones){
    let resultado = 0
    for (let index = 0; index < calificaciones.length; index++) {
        resultado = calificaciones[index] + resultado
              }
              return resultado/calificaciones.length
    }
    



const calificaciones= [ 100,80,50,90]
   
console.log(calculaPromedio(calificaciones))