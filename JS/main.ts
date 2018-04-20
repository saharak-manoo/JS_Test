declare var $: any
// interface Beer {
//     name: String
//     abv: number
//     description: string
// }
class Beer {
    name: string
    abv: number
    description: string

    constructor(beer: { name: string, abv: number, description: string }) {
        this.name = beer.name
        this.abv = beer.abv
        this.description = beer.description
    }

    print(): string {
        return `${this.name} (${this.abv}%) - ${this.description}`
    }

}

function getBeers() {
    return fetch("https://api.punkapi.com/v2/beers").then((resp) => {
        return resp.json()
    })
}

function addBeer(beer: Beer): void {
    const $beers = $('#beers')
    $beers.append(`<li>${beer.print()}</li>`)
}

function displayBeers(beers: Beer[]): void {
    beers.forEach((beer) => {
        addBeer(new Beer(beer)
    })
}

getBeers().then((beers) => {
    displayBeers((beers))
})

// addBeer();
// // getBears()