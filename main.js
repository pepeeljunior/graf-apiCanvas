function draw() {
    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "green";   // color verde
        ctx.fillRect(10, 10, 100, 100); // cuadrado verde
    }
}