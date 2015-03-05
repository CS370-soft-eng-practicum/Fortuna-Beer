var slots = new Array();
slots[0] = new Array("Sweet", "Sour", "Bitter", "Salty");
slots[1] = new Array("Dark", "Light", "Clear");
slots[2] = new Array("Full Bodied", "Thin", "Aromatic");

var beers = ["Heady Topper", "Pliny the Younger", "Zombie Dust", "Good Morning", "Guinness Draught", "Samuel Adams Octoberfest", "Magic Hat #9", "Lagunitas IPA", "Bud Light", "Budweiser", "Coors Light", "Miller Light", "Busch Light", "Bud Light Lime", "Blue Ribbon", "Yuengling Traditional Lager"]

function pull() {
	for (var i = 0; i < slots.length; i++) {
		document.getElementById('slot'+(i+1)).innerHTML = slots[i][Math.floor(Math.random()*slots[i].length)];
	}
	randBeer();
}

function randBeer() {
	document.getElementById('chosen_one').innerHTML = beers[Math.floor(Math.random()*beers.length)];
}

function getRandomBeer() {
    $.post( 
          'php/BreweryDB.php'
       ).success(function(resp){
            document.getElementById('randomBeerInfo').innerHTML = resp;
       });
}