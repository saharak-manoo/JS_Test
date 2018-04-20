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
        return ` <div class="alert alert-info">
        <strong><h1><a href="https://coinmarketcap.com/currencies/${this.id}/">${this.name}</a></h1></strong> <h4> ชื่อย่อ : ${this.symbol}  ราคา : ${this.price_thb} THB</h4>
      </div>`
    }
   

}

function getCoins() {
    return fetch("https://api.coinmarketcap.com/v1/ticker/?convert=THB&limit=20").then((resp) => {
        return resp.json()
    })
}

function addCoin(coin: Coin): void {
    const $coins = $('#coins')
    $coins.append(`${coin.print()}`)
}

function displayCoins(coins: Coin[]): void {
    coins.forEach(function (coin) {
        addCoin(new Coin(coin))



    })
}

getCoins().then((coins) => {
    displayCoins((coins))
})

