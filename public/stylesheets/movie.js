function movieSelected(id) {     //to transfer movie details from 1 html page to another
  localStorage.setItem('movieId', id);
  var apikey = "2ad7681adf43290559749458fc78a528";
  var url = "https://api.themoviedb.org/3/movie/";
  axios.get(url + id + "?api_key=" + apikey)
    .then((response) => {
      let movie = response.data;
      window.location = '/users/movies?moviename='+movie.title;
    });
  return false;
}

function getMovie() {
  setTimeout(function(){
    $(".loader-wrapper").fadeOut("slow");
  },500);
  
  let movieId = localStorage.getItem('movieId');    //get using data sent via local storage

  var apikey = "2ad7681adf43290559749458fc78a528";
  var a = "https://image.tmdb.org/t/p/w500";
  var url = "https://api.themoviedb.org/3/movie/";
  axios.get(url + movieId + "?api_key=" + apikey)
    .then((response) => {
      let movie = response.data;
      console.log(response);
      var genre = [];
      for (let i = 0; i < movie.genres.length; i++) {
        let s = movie.genres[i].name;
        genre.push(s);
      }
      // console.log(genre.join(","));

      var lang = [];
      for (let i = 0; i < movie.spoken_languages.length; i++) {
        s = movie.spoken_languages[i].english_name;
        lang.push(s);
      }
      // console.log(lang.join(","));

      // var bgi = movie.backdrop_path;
      // let bg = a + bgi;
      // console.log(bg);
      // $("#movie").css("background-image", "url(" + bg + ")");

      document.querySelector('title').textContent = movie.title + " - Movie | Book Seats Now!";

      let output = `
            <div class="row">
            <div class="col-md-4">
              <img src="${a + movie.poster_path}" class="thumbnail">
            </div>
            <div class="col-md-8">
              <h2 class="disp1">${movie.title}</h2>
              <br>
              <ul class="list-group">
                    <li class="list-group-item"><strong>Released:</strong> ${movie.release_date}</li>
                    <li class="list-group-item"><strong>Runtime:</strong> ${movie.runtime} min</li>
                    <li class="list-group-item"><strong>Rating:</strong> ${movie.vote_average}</li>
                    <li class="list-group-item"><strong>Genre:</strong> ${genre.join(", ")}</li>
                    <li class="list-group-item"><strong>Available in:</strong> ${lang.join(", ")}</li>
                    <li class="list-group-item"><strong>Plot:</strong> ${movie.overview}</li>
                    
              </ul>
            </div>
          </div>
        `;

        var x=a + movie.poster_path;
        localStorage.setItem('name',movie.title);
        localStorage.setItem('poster',x);

        var bgi = movie.backdrop_path;
        let bg = a + bgi;
        localStorage.setItem('bgposter',bg);

      $('#movie').html(output);


      localStorage.setItem('rating',movie.vote_average);
      
    })
    
    .catch((err) => {
      console.log(err);
    });

   

    axios.get(url + movieId + "/videos?api_key=" + apikey)
    .then((response) => {
      let m = response.data.results;
      

      let x=m[0].key;
      //console.log(x);

      let yt= "https://www.youtube.com/watch?v="+x;
      //console.log(yt);

      let output1=`
          <a href="${yt}" class="btn btn-danger active" id="trailer" target="_blank" role="button" aria-pressed="true">Watch Trailer</a>
      `;

      // $('#trailer').attr("href",yt);

      $( ".list-group" ).append(output1);

    })
    .catch((err) => {
      console.log(err);
    });
    
}


