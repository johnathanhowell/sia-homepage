var pricesPerTB = {
	'sia': 2,
	'amazon': 23,
	'google': 20,
	'microsoft': 24,
}

var downloadCostsPerTB = {
	'sia': 1,
	'amazon': 92,
	'google': 110,
	'microsoft': 87,
}

function updatePriceEstimates(ntb) {
	for (provider in pricesPerTB) {
		document.getElementById(provider + '-monthlystoragecost').innerHTML = '$' + (pricesPerTB[provider] * ntb).toLocaleString()
		document.getElementById(provider + '-downloadbandwidthcost').innerHTML = '$' + (downloadCostsPerTB[provider] * ntb).toLocaleString()
	}
}

var input = document.getElementById('price')

input.onchange = function(e) {
	updatePriceEstimates(e.target.value)
}

document.getElementById('watchvideobutton').onclick = function() {
	document.getElementById('watchvideomodal').className += ' is-active'
}

document.getElementById('watchvideoclose').onclick = function() {
	var c = document.getElementById('watchvideomodal').className
	document.getElementById('watchvideomodal').className = c.replace('is-active', '')
}