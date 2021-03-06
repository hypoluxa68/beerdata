$(document).ready(function(){
	// get and show data
	fetch("https://spreadsheets.google.com/feeds/list/1HP8g1SLSusyzS3azySw3Pa5Q1akq-yRXa5_9uBH1_yw/3/public/values?alt=json")
	.then(res => res.json())
  	.then(json => {
   	const beerData = []
   	const rows = json.feed.entry
   	
   	for(const row of rows) {
   		const formattedRow = {}
      	for(const key in row) {
      		if(key.startsWith("gsx$")) {
         		formattedRow[key.replace("gsx$", "")] = row[key].$t
        		}
			}			
			beerData.push(formattedRow)
			}
			var beerDataBeer = []
			function showBeers(){
				for(var i = 0; i < beerData.length; i++){
					var beerText = ''
					beerText += '<div class="card">'
					beerText += '<div class="card-body">'
					beerText += '<h3 class="card-title">' + beerData[i].beername + '</h3>'
					beerText += '<div class="card-text">'
					beerText += '<h5 class="' + beerData[i].breweryid + '">' + beerData[i].breweryname + '</h5>'
					beerText += '<p><strong>Style:</strong><br/>' + beerData[i].style + '</p>'
					beerText += '<p><strong>ABV:</strong><br/>' + beerData[i].abv + '</p>'
					$('#beers').append(beerText)
				}
			}
			
		$('#by-beer').click(function(){
			for(var i = 0; i < beerData.sort((a,b) => (a.beername > b.beername) ? 1: -1).length; i++){
				var beerText = ''
				beerText += '<div class="card">'
				beerText += '<div class="card-body">'
				beerText += '<h3 class="card-title">' + beerData[i].beername + '</h3>'
				beerText += '<div class="card-text">'
				beerText += '<h5 class="' + beerData[i].breweryid + '">' + beerData[i].breweryname + '</h5>'
				beerText += '<p><strong>Style:</strong><br/>' + beerData[i].style + '</p>'
				beerText += '<p><strong>ABV:</strong><br/>' + beerData[i].abv + '</p>'
				$('#beers').append(beerText)
			}
		})	
		
		$('#by-brewery').click(function(){
			for(var i = 0; i < beerDataBrewery.length; i++){
				var beerText = ''
				beerText += '<div class="card">'
				beerText += '<div class="card-body">'
				beerText += '<h3 class="card-title">' + beerData[i].beername + '</h3>'
				beerText += '<div class="card-text">'
				beerText += '<h5 class="' + beerData[i].breweryid + '">' + beerData[i].breweryname + '</h5>'
				beerText += '<p><strong>Style:</strong><br/>' + beerData[i].style + '</p>'
				beerText += '<p><strong>ABV:</strong><br/>' + beerData[i].abv + '</p>'
				$('#beers').append(beerText)
			}
		})
		showBeers()
		console.log(beerData)
		console.log(beerData.sort((a,b) => (a.beername > b.beername) ? 1: -1))
	});
});