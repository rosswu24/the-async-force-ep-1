(function(){

     var oReq = new XMLHttpRequest();

    function starWarsName(){
        var person4 = document.querySelector('person4');
        var response = JSON.parse(this.responseText);
        console.log(response);

        person4Name.innerHTML = response.name;
    }

    function getstarWarsName(id){
        oReq.addEventListener('load', starWarsName);
        oReq.open('GET', `http://www.swapi.co/api/people/${id}`); 
        oReq.send();
    }

    var oReq2 = new XMLHttpRequest();

    function starWarsPlanet(){
        var person4 = document.querySelector('person4');
        var response = JSON.parse(this.responseText);
        console.log(response);

        person4HomeWorld.innerHTML = response.name;
    }

    function getstarWarsPlanet(id){
        oReq2.addEventListener('load', starWarsPlanet);
        oReq2.open('GET', `http://www.swapi.co/api/planets/${id}`); 
        oReq2.send();
    }

    var oReq3 = new XMLHttpRequest();

    function newStarWarsName(){
        var person14 = document.querySelector('person14');
        var response = JSON.parse(this.responseText);
        console.log(response);

        person14Name.innerHTML = response.name;
    }

    function getNewStarWarsName(id){
        oReq3.addEventListener('load', newStarWarsName);
        oReq3.open('GET', `http://www.swapi.co/api/people/${id}`);
        oReq3.send();
    }

    var oReq4 = new XMLHttpRequest();

    function starWarsSpecies(){
      var person14 = document.querySelector('person14');
      var response = JSON.parse(this.response);
      console.log(response);

      person14Species.innerHTML = response.name;
    }

    function getstarWarsSpecies(id){
      oReq4.addEventListener('load',starWarsSpecies);
      oReq4.open('GET', `http://www.swapi.co/api/species/${id}`);
      oReq4.send();
    }

     var oReq5 = new XMLHttpRequest()
    
    function getFilms(){  

      for (var i = 0, len = res.results.length; i < len; i++) {
        
        filmResult = len[i];

    var filmPlanetsContainer = document.createElement("ul");
      filmPlanetsContainer.className = "filmPlanets";
      filmPlanetsContainer.innerHTML = filmResult.planets;

    for (var p = 0; p < res.results[i].planets.length; p++) {
      planetResult = res.results[i];

      (function(myPlanets) {
        var pReq = new XMLHttpRequest();
        pReq.addEventListener("load", function(){
          var pRes = JSON.parse(this.responseText);

          var planetListItemContainer = document.createElement("li");
            planetListItemContainer.className = "planets";
            planetListItemContainer.innerHTML = planetResult[i];

          myPlanets.appendChild(planetListItemContainer);
        });

        oReq5.open("GET", `http://swapi.co/api/films/`,res.results[i].planets[p]);
        oReq5.send();

      })(filmPlanetsContainer);

    }
  }
}
  
getstarWarsName(4);
getstarWarsPlanet(1);
getNewStarWarsName(14);
getstarWarsSpecies(1);
getFilms();
})();
