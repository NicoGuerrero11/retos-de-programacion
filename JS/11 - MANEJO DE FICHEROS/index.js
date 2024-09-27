const fs = require('fs');

// Nombre del archivo y contenido a escribir
const filename = 'Dathbelial.txt';
const content = `Darthbelial\n34\nJavascript.`;

// Escribir en el archivo
fs.writeFile(filename, content, (err) => {
    if (err) {
        console.error('Error al crear el archivo:', err);
        return;
    }
    console.log(`Archivo '${filename}' creado con éxito.`);

    // Leer el contenido del archivo
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }
        console.log(`Contenido del archivo '${filename}':\n${data}`);

        // Borrar el archivo
        fs.unlink(filename, (err) => {
            if (err) {
                console.error('Error al borrar el archivo:', err);
                return;
            }
            console.log(`Archivo '${filename}' borrado con éxito.`);
        });
    });
});