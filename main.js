
// llamo a los elementos que voy a usar
const input=document.getElementById("input");
const list=document.getElementById("list");

// creo la funcion de agregar tareas
function agregarTareas() {
    let valorInput = input.value;
//pregunto si input esta vacio (el contenido) si la respuesta es si:
    if (input=== ""){
        alert ("Por favor, ingrese una nueva tarea")
    return;
    }

// si la respuesta es no: continuo creando las listas con createelement

let nuevaTarea= document.createElement("li");
nuevaTarea.classList.add("nuevaTarea");

// a nueva tarea le asigno el contido que tiene input mas un espacio para el boton x

nuevaTarea.textContent=valorInput + "    ";

// creamos el boton eleiminar

let botonEliminar= document.createElement("button");
botonEliminar.textContent= "X";
botonEliminar.classList.add("botonEliminar");

botonEliminar.onclick= function( ) { nuevaTarea.remove();

}

nuevaTarea.appendChild(botonEliminar);
list.appendChild(nuevaTarea);

input.value= "";

}


























//boton.addEventListener("click", agregartareas)

//function agregartareas(){

 //   let texto= input.value;
   // if(texto.trim()==="") return;
 //   const li= document.createElement("li");
  //  const checkbox= document.createElement("input");
   // checkbox.type="checkbox";
  //  const span=document.createElement("span");
   // span.textContent=texto;
   // const btnborrar= document.createElement("button");
   // btnborrar.textContent= "X"
   // btnborrar.style.marginLeft= "10px";
   // btnborrar.style.cursor= "pointer";  
   // li.appendChild(checkbox);
   // li.appendChild(span);
   // li.appendChild(btnborrar)
   // list.appendChild(li);
   // checkbox.addEventListener("change", ()=> {
     //   console.log(li);
    //    li.classList.toggle("completada");
    //});
    //btnborrar.addEventListener("click",() => {
    //    li.remove();
        
    //}
    
    //)  
  //  input.value="";

//}








