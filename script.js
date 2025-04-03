function confirmarAsistencia() {
    const telefono = "3118461034"; // Número de WhatsApp
    const mensaje = "¡Hola! Quiero confirmar mi asistencia a la fiesta de cumpleaños 🎉🥳.";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}
