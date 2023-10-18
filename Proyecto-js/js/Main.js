$(document).ready(function(){

  

  if(window.location.href.indexOf("index") >-1){
    //Slider
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
      });
    
      //Articulos 

      // Es un vector de json ( en este caso 4)
      var articulos= [
        {
            titulo: "Ejemplo de titulo 1",
            fecha: new Date(),
            contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, magni provident veritatis modi distinctio aspernatur! Rem non optio quisquam corporis obcaecati rerum dicta quos sint, debitis dolorum animi quasi et.lorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illum, eos dicta ipsam assumenda odit expedita quis, sit autem sint consequuntur accusantium dolore. Quibusdam aspernatur quasi, esse reiciendis tenetur odio."
        },
        {
            titulo: "Ejemplo de titulo 2",
            fecha: new Date(),
            contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, magni provident veritatis modi distinctio aspernatur! Rem non optio quisquam corporis obcaecati rerum dicta quos sint, debitis dolorum animi quasi et.lorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illum, eos dicta ipsam assumenda odit expedita quis, sit autem sint consequuntur accusantium dolore. Quibusdam aspernatur quasi, esse reiciendis tenetur odio."
        }
        ,
        {
            titulo: "Ejemplo de titulo 3 ",
            fecha: new Date(),
            contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, magni provident veritatis modi distinctio aspernatur! Rem non optio quisquam corporis obcaecati rerum dicta quos sint, debitis dolorum animi quasi et.lorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illum, eos dicta ipsam assumenda odit expedita quis, sit autem sint consequuntur accusantium dolore. Quibusdam aspernatur quasi, esse reiciendis tenetur odio."
        }
        ,
        {
            titulo: "Ejemplo de titulo 4 ",
            fecha: new Date(),
            contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, magni provident veritatis modi distinctio aspernatur! Rem non optio quisquam corporis obcaecati rerum dicta quos sint, debitis dolorum animi quasi et.lorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illum, eos dicta ipsam assumenda odit expedita quis, sit autem sint consequuntur accusantium dolore. Quibusdam aspernatur quasi, esse reiciendis tenetur odio."
        }

      ]

      articulos.forEach((item,index)=>{
        var art= `
                <article class="post">
                <h3>${item.titulo}</h3>
                <span class="date">${item.fecha}</span>
                <p> ${item.contenido}</p>
                <a href="#" class="boton">Leer mas </a>
                </article> '
    
        `;
            
        $("#posts").append(art);

      })
    }
      //Cambiar los temas

      var tema= $("#tema");

      $("#red").click(function(){
        tema.attr("href","css/red.css");
      })
      
      $("#blue").click(function(){
        tema.attr("href","css/blue.css");
      })

      $("#green").click(function(){
        tema.attr("href","css/green.css");
      })


      //Scroll hacia arriba

      $("#subir").click(function(e){
        e.preventDefault();

        $("html , body").animate({
          scrollTop: 0
        },500)
        return false;
      });
        

    
  //Login falso

  $("#login form").submit(function(){
        
  // event.preventDefault();

  // console.log(event);
  var nombre= $("#txtNombre").val();

  localStorage.setItem("Nombre",nombre);

  });

  var Name= localStorage.getItem("Nombre");

  if(Name != null && Name != "undefined"){

  var parrafo=  $("#about p");
  parrafo.html("Bienvenido " + Name);
  parrafo.append("<a href='' id='log'> Cerrar sesion </a>");

  $("#login").hide();

  $("#log").click(function(){
    localStorage.clear();
    location.reload();

  })

  }

  //Acordeon
  if(window.location.href.indexOf("sobremi") >-1){
     
    $("#acordeon").accordion();
  
    }

  //Reljo
  if(window.location.href.indexOf("reloj") >-1){

    setInterval(function(){
      var reloj= moment().format('h:mm:ss a');

    $("#reloj").html(reloj);
    },1000)
  }

  //validacion
  if(window.location.href.indexOf("contacto") >-1){
  $.validate({
    lang: "es"
  });
  
  }
}
);


      