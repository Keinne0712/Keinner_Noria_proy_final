let preguntaActual=1

let respuesta1;
let respuesta2;
let respuesta3;
let respuesta4;
let respuesta5;

let CapiAmistoso = 0;
let CapiChill = 0;
let CapiPedro =0; 
let Capiflow = 0;

let resultado;

let cuadro =document.querySelector(".encuesta");
let preguntaInicial = '<h1 class="titulo">¿Que tipo de capybara/chiguire eres?</h1>'

let pregunta1=document.querySelector(".pregunta1");
let pregunta2=document.querySelector(".pregunta2");
let pregunta3=document.querySelector(".pregunta3");
let pregunta4=document.querySelector(".pregunta4");
let pregunta5=document.querySelector(".pregunta5");
  
pregunta2.style.display = "none";
pregunta3.style.display = "none";
pregunta4.style.display = "none";
pregunta5.style.display = "none";

let label1 = document.querySelector(".label1");
let label2 = document.querySelector(".label2");
let label3 = document.querySelector(".label3");
let label4 = document.querySelector(".label4");

let input1 =document.querySelector("#opcion1");
let input2 =document.querySelector("#opcion2");
let input3 =document.querySelector("#opcion3");
let input4 =document.querySelector("#opcion4");

label1.innerHTML="tenerla sola";
label2.innerHTML="tenerla con gente";
label3.innerHTML="para que quieres saber?";
label4.innerHTML="vivo en un puente XD";


let boton= document.querySelector(".siguiente");

boton.onclick= function(){

    respuesta1 = document.querySelector("input[name=pregunta]:checked").id;
    

    console.log(respuesta1)

    if(preguntaActual == 1){    

        let respuesta = document.querySelector('input[name=pregunta]:checked').value;
        console.log(respuesta);
        if (respuesta=='opcion1') {
            CapiChill=CapiChill+1
        }else if (respuesta=='opcion2') {
            CapiAmistoso=CapiAmistoso+1
        }else if (respuesta=='opcion3') {
            Capiflow=Capiflow+1
        }else if (respuesta=='opcion4') {
            CapiPedro=CapiPedro+1
        }

        pregunta1.style.display="none";
        pregunta2.style.display="block";
        label1.innerHTML="si";
        label2.innerHTML="no";
        label3.innerHTML="mas o menos";
        label4.innerHTML="no entendi";
    }
    else if(preguntaActual == 2){

        let respuesta = document.querySelector('input[name=pregunta]:checked').value;
        console.log(respuesta);
        if (respuesta=='opcion1') {
            CapiChill=CapiChill+1
        }else if (respuesta=='opcion2'){
            Capiflow=Capiflow+1
        }else if (respuesta=='opcion3'){
            CapiAmistoso=CapiAmistoso+1
        }else if (respuesta=='opcion4') {
            CapiPedro=CapiPedro+1
        }
        pregunta2.style.display="none";
        pregunta3.style.display="block";
        label1.innerHTML="SI";
        label2.innerHTML="no";
        label3.innerHTML="me pongo lo que vea";
        label4.innerHTML="me gusta el flow";
        
    }

    if(preguntaActual == 3){  

        let respuesta = document.querySelector('input[name=pregunta]:checked').value;
        console.log(respuesta);
        if (respuesta=='opcion1') {
            CapiChill=CapiChill+1
        }else if (respuesta=='opcion2') {
            CapiAmistoso=CapiAmistoso+1
        }else if (respuesta=='opcion3') {
            CapiPedro=CapiPedro+1
        }else if (respuesta=='opcion4') {
            Capiflow=Capiflow+1
        }
        
        pregunta3.style.display="none";
        pregunta4.style.display="block";
        label1.innerHTML="si";
        label2.innerHTML="no";
        label3.innerHTML="estoy en el piso";
        label4.innerHTML="no, estoy F L O T A N D O";
    }
    else if(preguntaActual == 4){

        let respuesta = document.querySelector('input[name=pregunta]:checked').value;
        console.log(respuesta);
        if (respuesta=='opcion1') {
            CapiChill=CapiChill+1
        }else if (respuesta=='opcion2') {
            CapiAmistoso=CapiAmistoso+1
        }else if (respuesta=='opcion3') {
            CapiPedro=CapiPedro+1
        }else if (respuesta=='opcion4') {
            Capiflow=Capiflow+1
        }
        
        pregunta4.style.display="none";
        pregunta5.style.display="block";
        label1.innerHTML="sI";
        label2.innerHTML="no";
        label3.innerHTML="yo no duermo B)";   
        label4.innerHTML="ayuda como arreglo mi horario de sueño D:";
    }

    else if(preguntaActual == 5){

        let respuesta = document.querySelector('input[name=pregunta]:checked').value;
        console.log(respuesta);
        if (respuesta=='opcion1') {
            CapiAmistoso=CapiAmistoso+1
        }else if (respuesta=='opcion2') {
            CapiChill=CapiChill+1
        }else if (respuesta=='opcion3') {
            Capiflow=Capiflow+1
        }else if (respuesta=='opcion4') {
            CapiPedro=CapiPedro+1
        }
        
        pregunta4.style.display="none";
        pregunta5.style.display="block";
        label1.innerHTML="sI";
        label2.innerHTML="no";
        label3.innerHTML="yo no duermo B)";
        label4.innerHTML="ayuda como arreglo mi horario de sueño D:";
        
        console.log("CapiPedro"+CapiPedro);
        console.log("CapiAmi"+CapiAmistoso);
        console.log("CapiChill"+CapiChill);
        console.log("CapiFlow"+Capiflow);

        if(CapiPedro>Capiflow && CapiPedro>CapiAmistoso && CapiPedro > CapiChill){

           // let preguntaInicial   = document.querySelector('input[name=pregunta]:checked').value;
        console.log(respuesta);
            pregunta5.style.display="none";
            preguntaInicial.display="block";
            let respuestaPedro= "<h2>Eres CapiPedro</h2>";
            let imagenPedro = '<img class="imagenPedro" src="img/CapiPedro.jpg" alt="">';
            cuadro.innerHTML=preguntaInicial+respuestaPedro+imagenPedro;
        }
        if(CapiAmistoso>CapiPedro && CapiAmistoso>CapiChill && CapiAmistoso>Capiflow){
            console.log(respuesta);
            pregunta5.style.display="none";
            preguntaInicial.display="block";
            let respuestaAmistoso= "<h2>Eres CapiAmistoso</h2>";
            let imagenAmistoso = '<img class="imagenAmistoso" src="img/CapiAmistoso.jpg" alt="">';
            cuadro.innerHTML=preguntaInicial+respuestaAmistoso+imagenAmistoso;
        }
        if(CapiChill>CapiAmistoso && CapiChill>CapiPedro && CapiChill>Capiflow){
        console.log(respuesta);
            pregunta5.style.display="none";
            preguntaInicial.display="block";
            let respuestaChill= "<h2>Eres CapiChill</h2>";
            let imagenChill = '<img class="imagenChill" src="img/CapiChill.gif" alt="">';
            cuadro.innerHTML=preguntaInicial+respuestaChill+imagenChill;
        }
        if(Capiflow>CapiAmistoso && Capiflow>CapiPedro && Capiflow>CapiChill){
            console.log(respuesta);
                pregunta5.style.display="none";
                preguntaInicial.display="block";
                let respuestaflow= "<h2>Eres CapiFlow</h2>";
                let imagenflow = '<img class="imagenflow" src="img/CapiFlow.jpg" alt="">';
                cuadro.innerHTML=preguntaInicial+respuestaflow+imagenflow;
            }
    }
    preguntaActual=preguntaActual+1; 
}

