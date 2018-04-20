declare var $: any;

class Coin {
    id: number
    name: string
    symbol: string
    price_thb: number

    constructor(coin: {id: number, name: string, symbol: string, price_thb: number}) {
        this.id =coin.id
        this.name = coin.name
        this.symbol = coin.symbol
        this.price_thb =coin.price_thb
    }

    print(): string {
        return `<a href="https://coinmarketcap.com/currencies/${this.id}/">${this.name}</a>(${this.symbol}) - ${this.price_thb}`
    }
 

}

function getCoins() {
    return fetch("https://api.coinmarketcap.com/v1/ticker/?convert=THB&limit=20").then((resp) => {
        return resp.json()
    })
}

function addCoin(coin: Coin): void {
    const $coins = $('#coins')
    $coins.append(`<li>${coin.print()} THB </li>`)
}

function displayCoins(coins: Coin[]): void {
    coins.forEach(function (coin) {
        addCoin(new Coin(coin))



    })
}

getCoins().then((coins) => {
    displayCoins((coins))
})

