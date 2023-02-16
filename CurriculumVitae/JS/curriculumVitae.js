window.addEventListener("load", function(){

    var day;
    var month;
    var year;
    var dayMod;
    var monthMod;
    var usuario=[];   

 getUsuarios()
   .then(datos => datos.json())
   .then(users => {
	   
	   usuario = users.results;
	    recorrer(usuario);
	   
   })
   
	   
    
   function getUsuarios(){
	   
	   return fetch('https://randomuser.me/api/');
   }



   function recorrer(usuario){         
         
    

        for(let i=0; i< usuario.length; i++){

           

            let img= document.getElementsByClassName("media-object")[i];
            img.src=usuario[i].picture.large;
        
            let heading= document.getElementsByClassName("media-heading")[i];
            heading.append(usuario[i].name.title+". "+usuario[i].name.first +" " +usuario[i].name.last);

           
            let liEdad= document.createElement('li');
            liEdad.append('Edad: '+usuario[i].dob.age);
            liEdad.style.listStyle="none";

            let liFecha= document.createElement('li');

            let fecha= usuario[i].dob.date;

            formatoFecha(fecha);

            liFecha.append('Fecha de Nacimiento: '+dayMod+'/'+monthMod+'/'+year);
            liFecha.style.listStyle="none";

            let liCorreo= document.createElement("li");
            liCorreo.append('Correo: '+usuario[i].email);
            liCorreo.style.listStyle="none";

            let liLocal= document.createElement("li");
            liLocal.append('Teléfono Local: '+usuario[i].phone);
            liLocal.style.listStyle="none";

            let liMovil= document.createElement("li");
            liMovil.append('Teléfono Móvil: '+usuario[i].cell);
            liMovil.style.listStyle="none";

            let lista= document.querySelector(".media-body ul");
             
            lista.append(liEdad);
            lista.append(liFecha);
            lista.append(liCorreo);
            lista.append(liLocal);
            lista.append(liMovil);

           let parrafo= document.querySelector(".media-body p");
            parrafo.append('Calle '+ usuario[i].location.street.name + ', número '+usuario[i].location.street.number+
            '. Ciudad: '+usuario[i].location.city+' - '+usuario[i].location.country+'. Código Postal: '+usuario[i].location.postcode );

       
	   
        }

   }

   function formatoFecha(fecha){



    let date= new Date(fecha);

            day=date.getDate();
            month=date.getMonth()+1;
            year = date.getFullYear();
           

            dayMod=day;
            monthMod=month;
            

            if (day<10){

               dayMod = '0'+day;

               console.log("dia: "+dayMod)
            }

            if(month<10){

                monthMod= '0'+month;
                console.log("month: "+ monthMod);
            }

            

   }
   
})