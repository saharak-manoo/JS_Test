var Coin = /** @class */ (function () {
    function Coin(beer) {
        this.name = beer.name;
        this.symbol = beer.symbol;
        this.price_thb = beer.price_thb;
    }
    Coin.prototype.print = function () {
        return this.name + " (" + this.symbol + "%) - " + this.price_thb;
    };
    return Coin;
}());
function getCoins() {
    return fetch("https://api.coinmarketcap.com/v1/ticker/?convert=THB&limit=20").then(function (resp) {
        return resp.json();
    });
}
function addCoin(coin) {
    var $coins = $('#coins');
    $coins.append("<li>" + coin.print() + "</li>");
}
function displayCoins(coins) {
    coins.forEach(function (coin) {
        addCoin(new Coin(coin));
    });
}
getCoins().then(function (coins) {
    displayCoins((coins));
});
