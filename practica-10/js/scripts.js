$('body').ready(function(){
    // alert('Hola desde JS')

    // Estructura de AJAX
    $.ajax({
        // url de la API web service
        url:'https://jsonplaceholder.typicode.com/users',
        // metodo de la peticion - GET, POST , PUT, DELETE, ETC.
        method:'GET',
        // formato en la que se recibe los datos
        dataType:'JSON',
        // datos a enviar al backend o al servicio web
        data:'',
        beforeSend: function(){
            // realizar una accion mientras se obtienen los datos

        },
        success: function(data){
            // console.log(data)
            // cuando se obtinen los datos de manera correcta
            // console.log(data[4].name)
            // console.log(data[4].company.name)

            data.forEach(element => {
                // console.log(element.name)
                let registro = '<tr>'+
                        '<td>' +element.id + '</td>'+
                        '<td>' +element.name + '</td>'+
                        '<td>' +element.usuario + '</td>'+
                        '<td>' +element.email + '</td>'+
                        '<td>' +element.address.street + '</td>'+
                        '<td>' +element.phone + '</td>'+
                        '<td>' +element.website + '</td>'+
                        '<td>' +element.company.name + '</td>'+
                    '</tr>'
                $('#contentUsuarios').append(registro)


            });

            // for(let i = 0; i < 10; i++ ){
            //     console.log(data[i].name)
            // }

        },
        error:function(){
            // hay error
            alert('Error al obtener la información')
        }
    })
})