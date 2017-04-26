$(function () {
	var flickerAPI = "sluzba.json";
	var lista = $.getJSON(flickerAPI, function (data){
		$.each(data, function a(i, f) {
				var tblRow = "<tr>" + "<td>" + f.id + "</td>" + 
									  "<td>" + f.firstName + "</td>" + 
									  "<td>" + f.lastName + "</td>" + 
									  "<td>" + f.dateOfBirth + "</td>" + 
									  "<td>" + f.function + "</td>" + 
									  "<td>" + f.experience + "</td>" + "</tr>";
				$(tblRow).appendTo("#userdata tbody");
			});
	})
});