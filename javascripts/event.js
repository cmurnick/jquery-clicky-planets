"use strict";

const planets = require('./planets');


$('#showButton').mouseover(() => {
	//all the planets to show
	createDomString(planets.getPlanets());
});

$('#clearButton').click(() => {
	let imageInfo = planets.getImageData();
	$('#planetHolder').html(`<h2>${imageInfo.title}</h2>`);
	$('#planetHolder').append(`</p>${imageInfo.explanation}</p>`);
});

// 	$('#planetHolder').empty();
// 	$('.planetName').show();
// 	$.ajax({method: 'GET', explanation: 'https://api.nasa.gov/planetary/apod?api_key=cML4iFHlbQ0IUTnGJROHnsbAfZ3Dl6TMWimdwSNY'}).done((data) => {
// 	console.log(data);
	
// }).fail((error) => {
// 	console.log(error);
// });
// 	$();
// });

$('#searchText').keypress((event) => {
	console.log(event);
	if (event.key === 'Enter') {
		var txt = ($('#searchText').val());
		var planetData = planets.getPlanets();

        var results = planetData.filter(function(thing){
        return thing.name.indexOf(txt)> -1;
	});
        createDomString(results);
        $('.planetName').removeClass("hidden");

}
});

const createDomString = (planetz) => {
	var planetString = '';
	console.log("in create Dom String,", planetz);
    for(var i=0; i<planetz.length; i++){
        var newPlanet = "";
        newPlanet+=`<div class="planetBox"  id="planetBox-${i}">`;
        newPlanet+=`<div class="planetName hidden">${planetz[i].name}</div>`;
        newPlanet+=`<img class="planetImage" src="${planetz[i].url}">`;
        newPlanet+= `</div>`;
        planetString += newPlanet;
    }
    printToDom(planetString);
};

const printToDom = (string) => {
	$('#planetHolder').html(string);
};


// const clickOver = () => {
	$('body').on('click', '.planetImage', (event) => { 
		$(event.target).prev().removeClass("hidden");
	});
// };



module.exports = {};