Vue.component('cabecera',{
  template:`
      <div>
      <header >
          <nav class=" header-top">
              <div id="datos_posicion_tiempo">
                  <span id="bembos_lugar">Lima, Perú. </span> 
                  <span id="bembos_fecha"> Diciembre 4, 2019, 00:00</span>
              </div>
          </nav>
          <nav class="navbar navbar-nav navbar-expand-lg d-flex justify-content-center" >
              <a class="navbar-brand" href="#">
                  <img src="imgs/bembos_bb_logo.png" width="266" height="55" class="d-inline-block align-top" alt="Bembos Burger Builder V 1.0">
              </a>
          </nav>
          <nav class="nav-user d-flex flex-row justify-content-between align-items-cente">
              <ul class="btn-users ">
                  <li id="btn-close">X SALIR</li>
              </ul>
              <div class="d-flex flex-row align-items-center">
                  <div id="user-name-bembos">Nombre de Usuario</div>
                  <div>
                  <i class="material-icons icon-blue ml-2 mr-3 mt-1">account_circle</i>
                  </div>
              </div>
          
          </nav>
      </header>
      </div>
  
  `
})
