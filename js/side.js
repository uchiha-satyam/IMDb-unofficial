let movieId = sessionStorage.getItem("movieId");
getData();
async function getData()
{
	const response = await fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"+movieId, 
		{
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
				"x-rapidapi-key": "5f7725c824mshd76eee14a33a650p1a0029jsn93e216cf7a0c"
			}
		})
	const data = await response.json();
	document.getElementById("movieImg").src = data.poster;
	document.getElementById("movieTrailer").addEventListener("click", ()=>{window.open(data.trailer.link);});
	document.getElementById("movieTitle").innerHTML = data.title;
	document.getElementById("movieYear").innerHTML = data.year;
	document.getElementById("movieRuntime").innerHTML = data.technical_specs[0][1];
	document.getElementById("movieSound").innerHTML = data.technical_specs[1][1];
	document.getElementById("movieRating").innerHTML = "⭐ "+data.rating+"/10";
	document.getElementById("movieRatings").innerHTML = data.rating_votes+" votes";
	document.getElementById("moviePlot").innerHTML = data.plot;


	for(let i=0; i<data.cast.length; i++)
	{
		var table = document.getElementById("movieCast");
		var row = table.insertRow(i+1);
		var cell1 = row.insertCell(0);
		var cell1text = document.createTextNode(data.cast[i].actor);
		var cell2 = row.insertCell(1);
		var cell2text = document.createTextNode(data.cast[i].character);
		// var cell3 = row.insertCell(2);
		// var cell3text = document.createTextNode("<a href=""https://www.google.com/search?q="+data.cast[i].actor+" class="castSearch badge badge-secondary">Search</a>");
		cell1.appendChild(cell1text);
		cell2.appendChild(cell2text);
		// cell3.appendChild(cell3text);
		// tableRow.innerHTML = `
		// 	<tr>
		// 		<td class="castActor"></td>
		// 		<td class="castCharacter"></td>
		// 		<td><a class="castSearch badge badge-secondary">Search</a></td>
		// 	</tr>
		// `;
		// document.getElementsByClassName("castActor")[i].innerHTML = data.cast[i].actor;
		// document.getElementsByClassName("castCharacter")[i].innerHTML = data.cast[i].character;
		// document.getElementsByClassName("castSearch")[i].href = "https://www.google.com/search?q="+data.cast[i].actor;
		// document.getElementById("movieCast").appendChild(tableRow);
	}
}