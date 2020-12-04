const url = 'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json';

const obtenerData = async() => {
    const res = await fetch(url);
    const data = await res.json();

    return data.elements;
    
}

export{
    obtenerData
}