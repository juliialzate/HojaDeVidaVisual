function limitarDigitos(elemento, cantidad) {
    if (elemento.value.length > cantidad) {
        elemento.value = elemento.value.slice(0, cantidad);
    }
}



function guardarDatos() {

    const nombre = document.getElementById('nombre').value;
    const celular = document.getElementById('celular').value;
    const cedula = document.getElementById('cedula').value;
    const nacimiento = document.getElementById('nacimiento').value;
    const libreta = document.getElementById('libreta').value;
    const direccion = document.getElementById('direccion').value;
    const ciudad = document.getElementById('ciudad').value;
	const edad = document.getElementById('edad').value;
	const primaria = document.getElementById('primaria').value;
    const secundaria = document.getElementById('secundaria').value;
    const gradocolegio = document.getElementById('gradocolegio').value;
    const tecnicos = document.getElementById('tecnicos').value;
	const tecnologo = document.getElementById('tecnologo').value;
    const pregrado = document.getElementById('pregrado').value;
    const universidad = document.getElementById('universidad').value;
    const gradou = document.getElementById('gradou').value;
    const idiomas = document.getElementById('idiomas').value;
	const puesto1 = document.getElementById('puesto1').value;
    const puesto2 = document.getElementById('puesto2').value;
    const puesto3 = document.getElementById('puesto3').value;
    const empresa1 = document.getElementById('empresa1').value;
    const empresa2 = document.getElementById('empresa2').value;
    const empresa3 = document.getElementById('empresa3').value;
	const descripcion1 = document.getElementById('descripcion1').value;
    const descripcion2 = document.getElementById('descripcion2').value;
    const descripcion3 = document.getElementById('descripcion3').value;
    const duracion1 = document.getElementById('duracion1').value;
    const duracion2 = document.getElementById('duracion2').value;
    const duracion3 = document.getElementById('duracion3').value;
    const habilidad1 = document.getElementById('habilidad1').value;
    const habilidad2 = document.getElementById("habilidad2").value;
	const objetivos = document.getElementById("objetivos").value;
	


    
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("celular", celular);
    sessionStorage.setItem("cedula", cedula);
    sessionStorage.setItem("nacimiento", nacimiento);
    sessionStorage.setItem("libreta", libreta);
    sessionStorage.setItem("direccion", direccion);
    sessionStorage.setItem("ciudad", ciudad);
	sessionStorage.setItem("edad", edad);
	sessionStorage.setItem("primaria", primaria);
    sessionStorage.setItem("secundaria", secundaria);
    sessionStorage.setItem("gradocolegio", gradocolegio);
    sessionStorage.setItem("tecnicos", tecnicos);
	sessionStorage.setItem("tecnologo", tecnologo);
    sessionStorage.setItem("pregrado", pregrado);
    sessionStorage.setItem("universidad", universidad);
    sessionStorage.setItem("gradou", gradou);
    sessionStorage.setItem("idiomas", idiomas);
	sessionStorage.setItem("puesto1", puesto1);
    sessionStorage.setItem("puesto2", puesto2);
    sessionStorage.setItem("puesto3", puesto3);
    sessionStorage.setItem("empresa1", empresa1);
    sessionStorage.setItem("empresa2", empresa2);
    sessionStorage.setItem("empresa3", empresa3);
	sessionStorage.setItem("descripcion1", descripcion1);
    sessionStorage.setItem("descripcion2", descripcion2);
    sessionStorage.setItem("descripcion3", descripcion3);
    sessionStorage.setItem("duracion1", duracion1);
    sessionStorage.setItem("duracion2", duracion2);
    sessionStorage.setItem("duracion3", duracion3);
    sessionStorage.setItem("habilidad1", habilidad1);
    sessionStorage.setItem("habilidad2", habilidad2);
	sessionStorage.setItem("objetivos", objetivos);
    ;


	// Obtener el valor seleccionado de los botones de radio
    const genero = document.querySelector('input[name="genero"]:checked').value;
    
    // Guardar en sessionStorage
    sessionStorage.setItem("genero", genero);

    
}


window.onload = function() {
    const nombre = sessionStorage.getItem("nombre");
    const celular = sessionStorage.getItem("celular");
    const cedula = sessionStorage.getItem("cedula");
    const nacimiento = sessionStorage.getItem("nacimiento");
    const libreta = sessionStorage.getItem("libreta");
    const direccion = sessionStorage.getItem("direccion");
    const ciudad = sessionStorage.getItem("ciudad");
	const edad = sessionStorage.getItem("edad");
	const genero = sessionStorage.getItem("genero")
	const primaria = sessionStorage.getItem("primaria");
    const secundaria = sessionStorage.getItem("secundaria");
    const gradocolegio = sessionStorage.getItem("gradocolegio");
    const tecnicos = sessionStorage.getItem("tecnicos");
	const tecnologo = sessionStorage.getItem("tecnologo");
    const pregrado = sessionStorage.getItem("pregrado");
    const universidad = sessionStorage.getItem('universidad');
    const gradou = sessionStorage.getItem('gradou');
    const idiomas = sessionStorage.getItem('idiomas');
	const puesto1 = sessionStorage.getItem("puesto1");
    const puesto2 = sessionStorage.getItem('puesto2');
    const puesto3 = sessionStorage.getItem('puesto3');
    const empresa1 = sessionStorage.getItem('empresa1');
    const empresa2 = sessionStorage.getItem('empresa2');
    const empresa3 = sessionStorage.getItem('empresa3');
	const descripcion1 = sessionStorage.getItem('descripcion1');
    const descripcion2 = sessionStorage.getItem('descripcion2');
    const descripcion3 = sessionStorage.getItem('descripcion3');
    const duracion1 = sessionStorage.getItem('duracion1');
    const duracion2 = sessionStorage.getItem('duracion2');
    const duracion3 = sessionStorage.getItem('duracion3');
    const habilidad1 = sessionStorage.getItem("habilidad1");
    const habilidad2 = sessionStorage.getItem('habilidad2');
	const objetivos = sessionStorage.getItem('objetivos');
 





    document.getElementById("nombre").textContent = nombre;
    document.getElementById("celular").textContent = celular;
    document.getElementById("cedula").textContent = cedula;
    document.getElementById("nacimiento").textContent = nacimiento;
    document.getElementById("libreta").textContent = libreta;
    document.getElementById("direccion").textContent = direccion;
    document.getElementById("ciudad").textContent = ciudad;
	document.getElementById("edad").textContent = edad;
	document.getElementById("genero").textContent = genero;
	document.getElementById("primaria").textContent = primaria;
    document.getElementById("secundaria").textContent = secundaria;
    document.getElementById("gradocolegio").textContent = gradocolegio;
    document.getElementById("tecnicos").textContent = tecnicos;
	document.getElementById("tecnologo").textContent = tecnologo;
    document.getElementById("pregrado").textContent = pregrado;
    document.getElementById("universidad").textContent = universidad;
    document.getElementById("gradou").textContent = gradou;
    document.getElementById("idiomas").textContent = idiomas;
	document.getElementById("puesto1").textContent = puesto1;
    document.getElementById("puesto2").textContent = puesto2;
    document.getElementById("puesto3").textContent = puesto3;
    document.getElementById("empresa1").textContent = empresa1;
    document.getElementById("empresa2").textContent = empresa2;
    document.getElementById("empresa3").textContent = empresa3;
	document.getElementById("descripcion1").textContent = descripcion1;
    document.getElementById("descripcion2").textContent = descripcion2;
    document.getElementById("descripcion3").textContent = descripcion3;
    document.getElementById("duracion1").textContent = duracion1;
    document.getElementById("duracion2").textContent = duracion2;
    document.getElementById("duracion3").textContent = duracion3;
    document.getElementById("habilidad1").textContent = habilidad1;
    document.getElementById("habilidad2").textContent = habilidad2;
	document.getElementById("objetivos").textContent = objetivos;
    
    }



    function mostrarImagenSegunGenero() {
        const genero = sessionStorage.getItem('genero'); // O puedes usar localStorage si corresponde
        const imagen = document.getElementById('imagenGenero');
    
        if (genero === 'femenino') {
            imagen.src = "imagenes/mujer.jpg";
        } else if (genero === 'masculino') {
            imagen.src = "imagenes/hombre.jpg";
        } else if (genero === 'no-binario') {
            imagen.src = "imagenes/binario.jpg";
        } else if (genero === 'otro') {
            imagen.src = "imagenes/otros.jpg";
        } else {
            imagen.src = ''; // O una imagen predeterminada
        }
    }
    
    
    window.addEventListener('load', cargarDatos);
    window.addEventListener('load', mostrarImagenSegunGenero);
    