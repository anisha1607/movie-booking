$(window).on("load",function(){
  setTimeout(function(){
    $(".loader-wrapper").fadeOut("slow");
    $("#carousel-example-2").css("visibility","visible");
    $('.container').fadeIn(1000);
  },500);
});

$(document).ready(() => {
  var apikey = "2ad7681adf43290559749458fc78a528";
  var a = "https://image.tmdb.org/t/p/w500";
  var url = "https://api.themoviedb.org/3/trending/movie/day?api_key="+apikey;
  axios.get(url)
    .then((response) => {         //returns a promise
      console.log(response);
      let movies = response.data.results; //puts the data required in movies field
      let output = '';
      let i = 0;
      $.each(movies, (index, movie) => { //for each movie, data is collected and attached to the output file
        i++;
        output += `
              <div class="col-md-4 col-lg-3 well">
                <div class="well text-center">
                <img src="${a + movie.poster_path}" onclick="movieSelected('${movie.id}')">
                </div>
              </div>
            `;
        if (i == 4) return false;
      });

      $('.trend').html(output);
    })
    .catch((error) => {
      console.log(error);
    });

  // action
  url = "https://api.themoviedb.org/3/discover/movie?api_key="+apikey;

  // var today = new Date();

  // var d = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
  let d = 2021/4/4;
  let gid = 28;
  axios.get(url + '&release_date=' + d + '&with_genres=' + gid + '&sort_by=popularity.desc')
    .then((response) => {         //returns a promise
      console.log(response);
      let movies = response.data.results; //puts the data required in movies field
      let output = '';
      let i = 0;
      $.each(movies, (index, movie) => { //for each movie, data is collected and attached to the output file
        i++;
        output += `
              <div class="col-md-4 col-lg-3 well">
                <div class="well text-center">
                <img src="${a + movie.poster_path}" onclick="movieSelected('${movie.id}')">
                </div>
              </div>
            `;
        if (i == 4) return false;
      });

      $('.action').html(output);
    })
    .catch((error) => {
      console.log(error);
    });

  //premiere
  url = "https://api.themoviedb.org/3/movie/upcoming?api_key="+apikey;
  axios.get(url)
    .then((response) => {         //returns a promise
      console.log(response);
      let movies = response.data.results; //puts the data required in movies field
      let output = '';
      let i = 0;
      $.each(movies, (index, movie) => { //for each movie, data is collected and attached to the output file
        i++;
        output += `
            <div class="col-md-4 col-lg-3 well">
              <div class="well text-center">
              <img src="${a + movie.poster_path}" onclick="movieSelected('${movie.id}')">
              </div>
            </div>
          `;
        if (i == 4) return false;
      });

      $('.premiere').html(output);
    })
    .catch((error) => {
      console.log(error);
    });

  //animation
  url = "https://api.themoviedb.org/3/discover/movie?api_key="+apikey;
  gid = 16;
  axios.get(url + '&release_date='+d+'&with_genres='+gid+'&sort_by=popularity.desc')
    .then((response) => {         //returns a promise
      console.log(response);
      let movies = response.data.results; //puts the data required in movies field
      let output = '';
      let i = 0;
      $.each(movies, (index, movie) => { //for each movie, data is collected and attached to the output file
        i++;
        output += `
          <div class="col-md-4 col-lg-3 well">
            <div class="well text-center">
            <img src="${a + movie.poster_path}" onclick="movieSelected('${movie.id}')">
            </div>
          </div>
        `;
        if (i == 4) return false;
      });

      $('.adv').html(output);
    })
    .catch((error) => {
      console.log(error);
    });


  //thriller
  url = "https://api.themoviedb.org/3/discover/movie?api_key=" + apikey;
  gid = 53;
  axios.get(url + '&release_date=' + d + '&with_genres=' + gid + '&sort_by=popularity.desc')
    .then((response) => {         //returns a promise
      console.log(response);
      let movies = response.data.results; //puts the data required in movies field
      let output = '';
      let i = 0;
      $.each(movies, (index, movie) => { //for each movie, data is collected and attached to the output file
        i++;
        output += `
            <div class="col-md-4 col-lg-3 well">
              <div class="well text-center">
              <img src="${a + movie.poster_path}" onclick="movieSelected('${movie.id}')">
              </div>
            </div>
          `;
        if (i == 4) return false;
      });

      $('.thr').html(output);
    })
    .catch((error) => {
      console.log(error);
    });



// carousel
url = "https://api.themoviedb.org/3/movie/now_playing?api_key="+apikey;
axios.get(url + "&region=US")
  .then((response) => {         //returns a promise
    //console.log(response);
    let movies = response.data.results; //puts the data required in movies field
    let output = '';
    i = 0;
    $.each(movies, (index, movie) => { //for each movie, data is collected and attached to the output file
      i++;
      
      output = `
          <div>
            <img src="${a + movie.backdrop_path}" class="w-100 p-3" onclick="movieSelected('${movie.id}')">
          </div>
          `;
      //console.log(output);
      if (i == 1){
        $('#view1').html(output);
        $('.cap1').html(movie.title);
      }

      if (i == 2){
        $('.v2').html(output);
        $('.cap2').html(movie.title);
      }

      if (i == 3){
        $('.v3').html(output);
        $('.cap3').html(movie.title);
        return false;}

    });


  })
  .catch((error) => {
    console.log(error);
  });

});

//<img class="d-block w-100" src="${a + movie.backdrop_path}" onclick="movieSelected('${movie.id}')>
