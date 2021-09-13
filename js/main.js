document.getElementById("action").addEventListener("click", action);

async function action()
{
	document.getElementsByClassName("initial")[0].style.paddingTop = "0";
	var query = document.getElementById("query").value;

	const response = await fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/"+query, 
		{
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
				"x-rapidapi-key": "5f7725c824mshd76eee14a33a650p1a0029jsn93e216cf7a0c"
			}
		})
	const options = await response.json();
	for(let i=0; i<options.titles.length; i++)
	{
		var division = document.createElement("div");
		division.className = "col-md-3"
		division.innerHTML = `
			<div class="well text-center">
				<img class="poster">
				<h2 class="title"></h2>
				<a class="about btn btn-light" href="#">About</a>
			</div>
		`;
		document.getElementById("searchResults").appendChild(division);
		document.getElementsByClassName("poster")[i].src = options.titles[i].image;
		document.getElementsByClassName("title")[i].innerHTML = options.titles[i].title;
		document.getElementsByClassName("about")[i].onclick = function() {more(options.titles[i].id)};
	}
}
function more(movieId){
	sessionStorage.setItem("movieId", movieId);
	window.location = "more.html";
	return false;
}