function getBears() {

	fetch("https://api.punkapi.com/v2/beers").then((resp) => {
		return resp.json()
	}).then((bears) => {
		console.log(bears)
		bears.forEach(bear) => {
			addBear(bear)
		}
	});
}
getBears()