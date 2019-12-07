new Vue({
    el: '#principal',
    data:{
        category01:[],
        category02:[],
        category03:[],
        category04:[],
        category05:[],
        category06:[],
        category07:[],
        TituloPaso1: "Elige el pan",
        TituloPaso2: "Elige el ingrediente base del pedido (Requerido)",
        TituloPaso3: "Elige el tipo de queso",
        TituloPaso4: "Elige tus verduras. (opcional, se puede elegir mas de una)",
        TituloPaso5: "Agrega tus extras. (opcional, se puede elegir mas de una)",
        TituloPaso6: "Elige tus papas",
        TituloPaso7: "Elige tu bebida",
        envioData:[],
        prueba: "",
        total:0
    },
    mounted:function(){
            this.GetApiServicio()
    },
    methods: {
        GetApiServicio: function(){
            axios.get('https://api.myjson.com/bins/ihjzk')
            .then(response =>{
                let categoria01 = []
                let categoria02 = []
                let categoria03 = []
                let categoria04 = []
                let categoria05 = []
                let categoria06 = []
                response.data.results.forEach(function myFunction(item, index) {
                    switch(item.id_category) {
                        case 5:
                            categoria01.push(item)
                            break;
                        case 1:
                            categoria02.push(item)
                            break;
                        case 2:
                            categoria03.push(item)
                            break;
                        case 3:
                            categoria04.push(item)
                            break;
                        case 4:
                            categoria05.push(item)
                            break;
                        case 6:
                            categoria06.push(item)
                            break;
                        default:
                          // code block
                      }
                });

                this.category01 = categoria01
                this.category02 = categoria02
                this.category03 = categoria03
                this.category04 = categoria04
                this.category05 = categoria05
                this.category06 = categoria06

                let pass01 = document.getElementById("p1");
                let pass02 = document.getElementById("p2");
                let pass03 = document.getElementById("p3");
                let pass04 = document.getElementById("p4");
                let pass05 = document.getElementById("p5");
                let pass06 = document.getElementById("p6");

                pass01.style.display = "block";
                pass02.style.display = "none";
                pass03.style.display = "none";
                pass04.style.display = "none";
                pass05.style.display = "none";
                pass06.style.display = "none";

            }).catch(e =>{
                console.log(e)
            })
            
        },
        anterior: function(e){
            this.validaGrupoActivo(e)
        },
        siguiente: function(e){
            this.validaGrupoActivo(e)
        },
        validaGrupoActivo: function(e){
            let pass01 = document.getElementById("p1");
            let pass02 = document.getElementById("p2");
            let pass03 = document.getElementById("p3");
            let pass04 = document.getElementById("p4");
            let pass05 = document.getElementById("p5");
            let pass06 = document.getElementById("p6");

            let validador01 = pass01.style.display;
            let validador02 = pass02.style.display;
            let validador03 = pass03.style.display;
            let validador04 = pass04.style.display;
            let validador05 = pass05.style.display;
            let validador06 = pass06.style.display;
            
            pass01.style.display = "none";
            pass02.style.display = "none";
            pass03.style.display = "none";
            pass04.style.display = "none";
            pass05.style.display = "none";
            pass06.style.display = "none";

            if (validador01 == "block"){
                if (e == "a"){
                    pass01.style.display = "block"
                }else{
                    pass02.style.display = "block"
                    this.cambiaClasePaso("paso2")
                }
            }
            if (validador02 == "block"){
                if (e == "a"){
                    pass01.style.display = "block"
                    this.cambiaClasePaso("paso1")
                }else{
                    pass03.style.display = "block"
                    this.cambiaClasePaso("paso3")
                }
            }
            if (validador03 == "block"){
                if (e == "a"){
                    pass02.style.display = "block"
                    this.cambiaClasePaso("paso2")
                }else{
                    pass04.style.display = "block"
                    this.cambiaClasePaso("paso4")
                }
            }
            if (validador04 == "block"){
                if (e == "a"){
                    pass03.style.display = "block";
                    this.cambiaClasePaso("paso3")
                }else{
                    pass05.style.display = "block"
                    this.cambiaClasePaso("paso5")
                }
            }
            if (validador05 == "block"){
                if (e == "a"){
                    pass04.style.display = "block"
                    this.cambiaClasePaso("paso4")
                }else{
                    pass06.style.display = "block"
                    this.cambiaClasePaso("paso6")
                }
            }
            if (validador06 == "block"){
                if (e == "a"){
                    pass05.style.display = "block"
                    this.cambiaClasePaso("paso5")
                }else{
                    pass06.style.display = "block";
                }
            }
        },
        cambiaClasePaso:function(pasoActivo){
            document.getElementById("paso1").classList.remove("stepper-invoice-item-activo");
            document.getElementById("paso2").classList.remove("stepper-invoice-item-activo");
            document.getElementById("paso3").classList.remove("stepper-invoice-item-activo");
            document.getElementById("paso4").classList.remove("stepper-invoice-item-activo");
            document.getElementById("paso5").classList.remove("stepper-invoice-item-activo");
            document.getElementById("paso6").classList.remove("stepper-invoice-item-activo");

            document.getElementById(pasoActivo).classList.add("stepper-invoice-item-activo");
        },
        sumarItems:function(cadenaItem){
            console.log(cadenaItem)
        }
    }
});