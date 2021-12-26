let subj = ['Mami,', 'Baby,', 'Nena,', 'Mamita,', 'Gata,', 'Leona,', 'Loba,'];
let desire = ['yo deseo', 'necesito', 'tengo que','no aguanto las ganas de', 'me muero por'];
let hotVerb = ['aprisionarte', 'encenderte', 'sacudirte', 'despeinarte', 'revolcarte', 'hacerte volar'];
let adverb = ['despacito', 'suave', 'profundo', 'salvaje', 'caliente', 'arriba', 'abajo', 'debajo', 'encima'];
let timeframe = ['hasta el amanecer', 'toda la noche', 'todo el día', 'un rato', 'toda la canción', 'hasta que cierren la disco', 'hasta que se acabe la fiesta', 'hasta que nos echen del antro'];
let final = ['sin remordimientos', 'sin pena', 'sin contarle a nadie', 'sin que nadie lo sepa', 'aunque se enteren todos', 'mientras tu novio no está' ];

let randomNum = (arr) => {Math.floor(Math.random() * arr.length)};
let categories = [subj,desire,hotVerb,adverb,timeframe,final];

const reggeatonator = () => {
    let lineArr =[];
    categories.forEach((el) => {
        let word = el[randomNum(el)];
        lineArr.push(word);
        
    });
    return lineArr.join(' ');
}
console.log(reggeatonator());

