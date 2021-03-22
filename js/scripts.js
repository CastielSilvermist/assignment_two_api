
var xhr = new XMLHttpRequest();
var url = "https://api.chucknorris.io/jokes/random"

xhr.open('GET', url, true);

xhr.send(null);

xhr.onload = function(){

	if(xhr.status == 200) {

 //console.log(xhr.responseText);
		 var data = JSON.parse(xhr.responseText)
		 console.log(data)


		 $(".joke").prepend("<img src='" + data.icon_url + "'><h2>" + data.value + "</h2><p>" + data.updated_at + "</p>")

		 	


			}
	}
