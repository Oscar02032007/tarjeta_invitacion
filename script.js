function confirmarAsistencia() {
    const telefono = "3123169795"; // Número de WhatsApp
    const mensaje = "¡Hola! Quiero confirmar mi asistencia a la fiesta de cumpleaños 🎉🥳.";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}
