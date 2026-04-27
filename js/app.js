const cuerpoTabla = document.getElementById('cuerpo-tabla');
async function cargarRecetas(){
    try {
        const respuesta = await fetch('./datos/recetas.xml')
        const textoXml = await respuesta.text();
        const parser = new DOMParser();
        const xmlDOC = parser.parseFromString(textoXml, 'application/xml');
        const recetas = xmlDoc.querySelectorAll('receta');

        for (const receta of recetas) {
            const fila = document.createElement('tr');
            const codigo = receta.getAttribute('codigo');
            const nombre = receta.querySelector('nombre').textContent;
            const categoria = receta.querySelector('categoria');
            const tiempo = receta.querySelector('tiempo').textContent;
            const dificultad = receta.querySelector('dificultad').textContent;

            fila.innerHTML = `
            <td>${codigo}</td>
            <td>${nombre}</td>
            <td>${categoria}</td>
            <td>${tiempo}</td>
            <td>${dificultad}</td>
            `;

            cuerpoTabla.appendChild(fila);
        }
    } catch (error) {
        console.error(error);
    }
}

cargarRecetas();