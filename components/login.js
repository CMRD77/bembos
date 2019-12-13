new Vue({
    el: '#login',
    data:{
        usuarioPrueba: "USER PRUEBAS"
    },
    methods: {
        ingresarLogin : function(){
            axios.get('https://bembospedidos.herokuapp.com/api/pedidos/user/')
            .then(response =>{
                if(!response){
                    console.log('Error')
                }else{
                    let user = document.getElementById("user").value;
                    let pass = document.getElementById("pass").value;

    
                    localStorage.setItem("dataLog",JSON.stringify(response.data.results))
    
                    let data = JSON.parse(localStorage.getItem("dataLog"))
                    let validaAcceso = false
                    let indexMap = null
                    data.map(function(i,idx){ validaAcceso = user == i.username; indexMap = idx })
                    localStorage.setItem("usuarioSesion",JSON.stringify(response.data.results[indexMap]))

                   
                    if (validaAcceso){
                        window.location.href = "http://127.0.0.1:5501/componentes.html";    
                        
                        // window.location.href = "http://127.0.0.1:5501/listado.html";
                    }else{
                        document.getElementById("msjValidacion").innerHTML = " <b style='padding: 10px; background: red;border-radius: 20px;color: #ffff;'>Usuario y/o contraseña incorrecta</b>";                        
                    }
                }
            });
        }
    }
});