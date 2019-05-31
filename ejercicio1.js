function tomarAsistencia(alumnos){
    let alumnosAsistencia = []
    for (let index = 0; index < alumnos.length; index++) {
        if(alumnos[index].asistencia){
              alumnosAsistencia[index] = alumnos[index].nombre  
        }
    }
    return alumnosAsistencia
}

const alumnos = [
    {nombre: "rafa",
     asistencia: true
    },
    {nombre: "karla",
    asistencia: false
}
]
console.log(tomarAsistencia(alumnos))