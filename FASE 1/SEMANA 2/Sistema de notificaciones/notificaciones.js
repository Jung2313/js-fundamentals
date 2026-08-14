const notificador = {
    destinatario: "Meli",
    enviarEmail(email) {
        return `Email a ${this.destinatario}: ${email}`
    },
    enviarSMS(mensaje) {
        return `SMS a ${this.destinatario}: ${mensaje}`
    }
}

const enviarNotificacion = (medio, mensaje) => {
    return medio(mensaje)
}

console.log(enviarNotificacion(notificador.enviarEmail.bind(notificador), "Tu inscripción fue exitosa"))
console.log(enviarNotificacion(notificador.enviarSMS.bind(notificador), "Tu inscripción fue exitosa"))

