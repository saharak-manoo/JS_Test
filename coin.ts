declare var $: any

class Coin {
    name: string
    symbol: string
    price_thb: number

    constructor(coin: { name: string, symbol: string, price_thb: number}) {
        this.name = coin.name
        this.symbol = coin.symbol
        this.price_thb =coin.price_thb
    }

    print(): string {
        return `(${this.symbol}) - ${this.price_thb}`
    }
    printname(): string {
        return `${this.name}`
    }

}

function getCoins() {
    return fetch("https://api.coinmarketcap.com/v1/ticker/?convert=THB&limit=20").then((resp) => {
        return resp.json()
    })
}

function addCoin(coin: Coin): void {
    const $coins = $('#coins')
    $coins.append(`<li><a href="https://coinmarketcap.com/currencies/${coin.printname()}/"_target="blank">${coin.printname()}</a>${coin.print()} THB </li>`)
}

function displayCoins(coins: Coin[]): void {
    coins.forEach((coin) => {
        addCoin(new Coin(coin)
    })
}

getCoins().then((coins) => {
    displayCoins((coins))
})

