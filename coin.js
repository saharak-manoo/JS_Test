var Coin = /** @class */ (function () {
    function Coin(coin) {
        this.id = coin.id;
        this.name = coin.name;
        this.symbol = coin.symbol;
        this.price_thb = coin.price_thb;
    }
    Coin.prototype.print = function () {
        return "<a href=\"https://coinmarketcap.com/currencies/" + this.id + "/\"><button type=\"button\" class=\"btn btn-info\">" + this.name + "</button></a> <br> \u0E0A\u0E37\u0E48\u0E2D\u0E22\u0E48\u0E2D : " + this.symbol + " <br> \u0E23\u0E32\u0E04\u0E32 : " + this.price_thb;
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
    $coins.append("<li>" + coin.print() + " THB </li>");
}
function displayCoins(coins) {
    coins.forEach(function (coin) {
        addCoin(new Coin(coin));
    });
}
getCoins().then(function (coins) {
    displayCoins((coins));
});
