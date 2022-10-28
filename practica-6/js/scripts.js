// alert('Hola JS!')
// console.log("Hola JS!")

// Tipo de varible
var nombre = 'Juan'
var telefono = '1234567890'
var email = 'juan@gmail.com'
var edad = 29

// declaracion de variables fijas, no cambia su valor
const sexo = 'Masculino'
const casado = true
const mensaje = 'Hola, feliz cumpleaños'

// puede cambiar su valor y se ocupa en ciclos
let empleo = 'Programador'

// Arreglos o listas
let colores = ['azul', 'verde', 'rojo', 'cafe', 'morado']
let numeros = [8, 9, 3, 9, 0, 33, 99, 23]

// objetos o diccionarios
const auto = {
    colores: ['verde', 'rojo', 'azul'],
    tipo:['manula', 'automatico'],
    cilindros:[4, 6, 8],
    puertas:[3, 5, 7, 9],
    modelos: [
        {
            A1:'sedan', 
            descripcion:'auto sedan etc.', 
            tipoPiel:false
        },
        {
            A2:'hashback', 
            descripcion:'auto hashback etc.', 
            tipoPiel:true
        },
        {
            A3:'hashback 2', 
            descripcion:'auto hashback 2 etc.', 
            tipoPiel:true
        },
        {
            A4:'sedan 2', 
            descripcion:'auto sedan 2 etc.', 
            tipoPiel:false,
            valor: [
                {},
                {},
            ]
        }
    ]
}

// empleo = 'Diseñador web'
// auto = 'nissan'
// auto = 'ford'
// mensaje = 'Otro mensaje'

// console.log(auto.modelos[2].descripcion)

let numeroUno = 1
let numeroDos = '1'

// condicion
// if(numeroUno == numeroDos){
//     // si la condicion de cumple
//     console.log('si son iguales')
// }else{
//     // si la condicion no se cumple
//     console.log('no son iguales')
// }

// Clicos
for(let i = 0; i < 5; i++){
    console.log(colores[i])
    // console.log(colores[0])
    // console.log(colores[1])
    // console.log(colores[2])
    // console.log(colores[3])
    // console.log(colores[4])
}

colores.forEach(result => {
    console.log(result)
})

console.clear();

// funcion
function sumar(){
    let ingresoUno = 50
    let ingresoDos = 127
    let resultadoSuma =  ingresoUno + ingresoDos

    console.log(resultadoSuma)
}

sumar()


let factura = {
    nombreEmisor:'Juan',
    rfcEmisor:'SDFGHJKIUYTRUH132',
    nombreReceptor:'Pedro',
    rfcReceptor:'5678Y8IYIU',
    concepto:[
        {nombre:'Pala', costoUnitario:79, sku:'8978SD'},
        {nombre:'Metro', costoUnitario:90, sku:'fghU89UIjytuf'},
        {nombre:'Pico', costoUnitario:200, sku:'SDFHUI'},
        {nombre:'Desarmador', costoUnitario:40, sku:'UISDHFIUYSD'}
    ],
    iva:16
};


for(let i = 0; i < 4; i++){
    console.log(factura.concepto[i].nombre)
}


factura.concepto.forEach(result => {
    console.log(result.nombre)
})