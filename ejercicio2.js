function reporteExamenes(examenes){
    let examenesAprobados = []
    for (let index = 0; index < examenes.length; index++) {
        if(examenes[index].cal1>50){
              examenesAprobados[index] = examenes[index]
        }
    }
    return examenesAprobados
}


const examenes= [
    {nombre: "historia",
     cal1: 100
    },
    {nombre: "programacion",
    cal1: 50
}
]
console.log(reporteExamenes(examenes))