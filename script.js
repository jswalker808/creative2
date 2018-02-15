$(document).ready(function() {
  $("#pokeSubmit").click(function(e) {
  	e.preventDefault();
  	var value = $("#pokeInput").val();
    var myurl= "https://pokeapi.co/api/v2/pokemon/" + value + "/";
    $.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(json) {
  	    console.log(json);
        var results = "";
        results += "<div class=\"col-sm-4 col-lg-4\"></div>";
        results += "<div class=\"col-sm-4 col-lg-4 content\">";
        results += "<img src=\"" + json.sprites.front_default + "\" class=\"img-responsive\">";
        results += "<h3 class=\"pokeName\">" + json.name + "</h3>"
        results += "<p>ID: " + json.id + "</p>";
        results += "<p>Height: " + json.height + "</p>";
        results += "<p>Weight: " + json.weight + "</p>";

        results += "<div class=\"col-sm-4 col-lg-4\"></div>";
        $("#pokeResults").html(results);
      }
    });
  });
});

function addAbilities(array, string) {
  string += "<p>Abilities: </p>";
  for (var i = 0; i < array.length; i++) {
    string += "<p></p>"
  }
}
