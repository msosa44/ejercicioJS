(function(){
    //variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");
    //funciones
     var agregarTarea = function() {
          var tarea = tareaInput.value,
              nuevaTarea = document.createElement ("li"),
              enlace = document.createElement("a"),
              contenido = document.createTextNode(tarea);
       

       if (tarea === "") {
           tareaInput.setAttribute("placeholder","agregar una tarea valida");
           tareaInput.className = "error";
           return false;
       }
       //agrega contenido al enlace
       enlace.appendChild(contenido);

       //establecemos atributo  href
       enlace.setAttribute("href", "#");

       // agregamos el enlace (a) a la nueva tarea "li"
       nuevaTarea.appendChild(enlace);

       //agregamos la nueva tarea a la lista
       lista.appendChild(nuevaTarea);

       tareaInput.value = " ";

       for (var i = 0; i <= lista.children.length -1 ; i++) {
           lista.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this)
            });
           
       }

     };
     var comprobarInput = function() {
       
     };
     var eliminarTarea = function(){
        
     };

     //Eventos

    //AgregarTarea
    btnNuevaTarea.addEventListener("click", agregarTarea);
    
    //comprobar Imput
    tareaInput.addEventListener("click", comprobarInput);

    //borrando elementos de la lista
    for(var i = 0; i <= lista.children.length -1 ; i++)
    {
       lista.children[i].addEventListener("click", eliminarTarea);
    }
}());