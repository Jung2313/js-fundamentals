const estudiantes = [
    { nombre: "Melina", edad: 32, email: "melina@hotmail.com" },
    { nombre: "", edad: 16, email: "carlos@gmail.com" },
    { nombre: "Ana", edad: 3, email: "ana@gmail.com" },
    { nombre: "Luis", edad: 25, email: "luisgmail.com" }
]

const inscripciones = {};

let estudiantesInscritos = 0;
let estudiantesRechazados = 0;

function validarEstudiante(estudiante) {
    if (estudiante.nombre === "") {
        throw new Error("El nombre no puede estar vacio");
    }
    if (estudiante.edad < 4 || estudiante.edad > 99) {
        throw new Error("La edad debe estar comprendida entre 5 y 99")
    }
    if (!estudiante.email.includes("@")) {
        throw new Error("El email es invalido")
    }
}

function asignarNivel(edad) {
    switch (true) {
        case edad >= 60:
            return "Adulto Mayor";

        case edad >= 18 && edad < 60:
            return "Adulto";

        case edad >= 13 && edad < 18:
            return "Juvenil";

        case edad >= 5 && edad < 13:
            return "Infantil"

        default:
            return "Edad no valida"
    }

}
for (const estudiante of estudiantes) {
    try {
        validarEstudiante(estudiante);
        const nivel = asignarNivel(estudiante.edad);
        inscripciones[estudiante.nombre] = nivel
        estudiantesInscritos++;

    }
    catch (error) {
        console.log(error.message)
        estudiantesRechazados++;
    }
}

for (const inscripcion in inscripciones) {
    console.log(`${inscripcion} - ${inscripciones[inscripcion]}`)
}

console.log(`Estudiantes inscritos: ${estudiantesInscritos}`);
console.log(`Estudiantes rechazados: ${estudiantesRechazados}`);
