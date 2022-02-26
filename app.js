//funcion tradicional para calcular la distancia entre dos puntos
//debo tener cuidado con el orden  como llamo las variables
/*function calcularDistancia(x1,y1,x2,y2){
return(Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2) ))
}*/

let calcularDistancia=(x1,y1,x2,y2)=>(Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2)))
    
//llamado a la función template literal o concatenación por referencia
let distancia=calcularDistancia(0,0,-10,-10)
let resultado=distancia.toFixed([2])
console.log(`La distancia calculada es ${resultado}`)