function paginaCargada(){

    var url = document.querySelector('.contenedor__input-url');
    var texto = document.querySelector('.contenedor__input-texto');
    var color = document.querySelector('.contenedor__input-color');
    var tam = document.querySelector('.contenedor__input-tamano');
    
    var imagen = document.querySelector('.contenedor__imagen-nueva');
    var crear = document.querySelector('.boton__crear');
    var limpiar = document.querySelector('.boton__limpiar');
    var text = document.querySelector('.texto');

    
    function crearElemento(){
        
        if(url.value !== '' && texto.value !== ''){

        imagen.style.backgroundImage= 'url('+url.value+')';
        text.innerHTML= texto.value;
        text.style.color= color.value;
        text.style.fontSize= tam.value+'px';
        crear.style.display= 'none';

        console.log('iivnaorñna');
        
        if(imagen.style.backgroundImage !== ''){
            function alerta() {
                alert("Descargando Composición");
                
            }
            imagen.addEventListener('click',alerta);
        }



        }else{
            alert("Falta ingresar algo");
        }
        
    }
        crear.addEventListener('click',crearElemento);


    function limpiarContenido(){
        imagen.style.backgroundImage= '';
        text.innerHTML= '';
        text.style.color= '';
        url.value = '';
        texto.value = '';
        tam.value= 50;
        color.value='black';
        crear.style.display= 'block';

        
    }limpiar.addEventListener('click',limpiarContenido);

    function nombreTiempoReal(){
        text.innerHTML = texto.value;
        text.style.fontSize = tamano.value+'px';
        text.style.color = color.value;

    }
    texto.addEventListener('input',nombreTiempoReal);
    tam.addEventListener('input',nombreTiempoReal);
    color.addEventListener('input',nombreTiempoReal);

    
    
    console.log(imagen.style.backgroundImage,' y tambrin','url('+url.value+')' );
   
    




}window.addEventListener('load',paginaCargada);