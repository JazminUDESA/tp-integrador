window.onload = function(){

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8`) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            //consultar como hacer para que te aparezca un objeto del array por cada lista
            //(y no todos los objetos dentro de una lista)
            for (let index = 0; index < data.results.length; index++) {
                const element = data.results[index].poster_path;
                var li = document.querySelector(".agregarImagen");
               li.innerHTML += `<img src="https://image.tmdb.org/t/p/original${element}">`
                
            }


        })        
        .catch(function(error) {
            console.log(`El error fue: ${error}`);
        })


}