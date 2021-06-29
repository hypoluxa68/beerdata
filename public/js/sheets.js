$(document).ready(function(){
	// get and show data
	fetch("https://spreadsheets.google.com/feeds/list/1iPk6_2iZcnmrRY8_JApaRV-MFpo6KH2DHC5R4FMsJaM/1/public/values?alt=json")
	.then(res => res.json())
  	.then(json => {
   	const data = []
   	const rows = json.feed.entry
   	
   	for(const row of rows) {
   		const formattedRow = {}
      	for(const key in row) {
      		if(key.startsWith("gsx$")) {
         		formattedRow[key.replace("gsx$", "")] = row[key].$t
        		}
			}
			data.push(formattedRow)		
			}
		}
		console.log(data)
	});
});