(function(){

     var oReq = new XMLHttpRequest();

    function starWarsName(){
        var person4 = document.querySelector('person4');
        var response = JSON.parse(this.responseText);
        console.log(response);

        person4Name.innerHTML = response.name;
    }

    function getstarWarsId(id){
        oReq.addEventListener('load', starWarsName);
        oReq.open('GET', `http://www.swapi.co/api/people/${id}`); 
        oReq.send();
    }
    function getPlanet(){

    }

    var oReq2 = new XMLHttpRequest();

    function newStarWarsName(){
        var contain14 = document.querySelector('person14');
        var response = JSON.parse(this.responseText);
        console.log(response);

        person14Name.innerHTML = response.name;
    }

    function getNewStarWarsName(id){
        oReq2.addEventListener('load', newStarWarsName);
        oReq2.open('GET', `http://www.swapi.co/api/people/${id}`);
        oReq2.send();
    
    }
  



getstarWarsId(4);
getNewStarWarsName(14);
})();
