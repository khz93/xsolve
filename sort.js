function sortTable(n) {
	  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	  table = document.getElementById("userdata");
	  switching = true;  dir = "asc"; 
	  while (switching) {
		switching = false;
		rows = table.getElementsByTagName("tr");
		for (i = 2; i < (rows.length - 1); i++) {
		  shouldSwitch = false;
		    rows[i].getElementsByTagName("td")[n].innerHTML
		  if (n == 3) {
			var x = rows[i].getElementsByTagName("td")[n].innerHTML.slice(0,10).split(".");
			x = new Date(x[2],x[1]-1,x[0]);
			var y = rows[i + 1].getElementsByTagName("td")[n].innerHTML.slice(0,10).split(".");
			y = new Date(y[2],y[1]-1,y[0])
		  } else if (n == 0 || n == 5) {
		  var x = parseInt(rows[i].getElementsByTagName("td")[n].innerHTML);
		  var y = parseInt(rows[i + 1].getElementsByTagName("td")[n].innerHTML);
		  } else {
		  var x = rows[i].getElementsByTagName("td")[n].innerHTML;
		  var y = rows[i + 1].getElementsByTagName("td")[n].innerHTML;
		  }
		  
		  if (dir == "asc") {
			if (x > y) {
		
			  shouldSwitch= true;
			  break;
			}
		  } else if (dir == "desc") {
			if (x < y) {
			  shouldSwitch= true;
			  break;
			}
		  }
		}
		if (shouldSwitch) {
		  rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		  switching = true;
		  switchcount ++;      
		} else {
		  if (switchcount == 0 && dir == "asc") {
			dir = "desc";
			switching = true;
		  }
		}
	  }
	}