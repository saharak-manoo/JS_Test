// interface Beer {
//     name: String
//     abv: number
//     description: string
// }
var Beer = /** @class */ (function () {
    function Beer(beer) {
        this.name = beer.name;
        this.abv = beer.abv;
        this.description = beer.description;
    }
    Beer.prototype.print = function () {
        return this.name + " (" + this.abv + "%) - " + this.description;
    };
    return Beer;
}());
function getBeers() {
    return fetch("https://api.punkapi.com/v2/beers").then(function (resp) {
        return resp.json();
    });
}
function addBeer(beer) {
    var $beers = $('#beers');
    $beers.append("<li>" + beer.print() + "</li>");
}
function displayBeers(beers) {
    beers.forEach(function (beer) {
        addBeer(new Beer(beer));
    });
}
getBeers().then(function (beers) {
    displayBeers((beers));
});
// addBeer();
// // getBears()
