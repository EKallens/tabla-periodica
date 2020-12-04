import '../../css/componentes.css';
import { obtenerData } from '../services/elementos-service';

const mostrarMensaje = (  ) => {
    const h1 = document.createElement('h1');
    h1.innerText = `Webpack starter`;
    document.body.append(h1);

    
}

const crearHTML = () => {

    const divContainer = document.querySelector('.container');
    let html= '';
    obtenerData().then( (elementos) => {
        elementos.forEach( (elemento) => {

            html += `
            <div class="element-card">
                <div class="front-facing">
                    <h1 class="abr">${elemento.symbol}</h1>
                    <p class="title">${elemento.name}</p>
                    <span class="atomic-number">${elemento.number}</span>
                    <span class="atomic-mass">${elemento.atomic_mass.toFixed(2)}</span>
                </div>
                <div class="back-facing">
                    <p>Copper is a chemical element with symbol Cu (from Latin: cuprum) and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity.</p>
                    <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">More info</a></p>
                </div>
            </div>
            `;
    
            divContainer.innerHTML = html;

        })
    });

}

const init = () => {
    crearHTML();
}

export {
    init
}