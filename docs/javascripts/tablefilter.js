
// TODO Not working -  Listen for when Enter is pressed in the Input, and the press the Search button //  
  var input = document.getElementById("myInput");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     searchIndex(input);
//     document.getElementById("searchButton").click(); //
    }
  });


/*
   potential speed increase due to Sarifi poor speed: search only names; 
   https://insidethediv.com/javascript-filter-table-row-single-and-multiple-columns 
   https://listjs.com/examples/table/
*/

// https://stackoverflow.com/questions/65247934/filtering-html-table-containing-links?noredirect=1&lq=1 //
  
function searchIndex() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (var i = 1; i < tr.length; i++) {
    var tds = tr[i].getElementsByTagName("td");
    var flag = false;
//    for(var j = 0; j < tds.length; j++){ //
    for(var j = 0; j < 2; j++){ 
      var td = tds[j];
      if (td.innerText.toUpperCase().indexOf(filter) > -1) {
        flag = true;
      } 
    }
    if(flag){
        tr[i].style.display = "";
    }
    else {
        tr[i].style.display = "none";
    }
  }
}



// When Reset button is pressed, clear the Input, ~~hide the Reset button~~, show all table rows //

  function clearInput() {
    var tr, i;
    document.getElementById('myInput').value = '';
//    document.getElementById('resetButton').style.display = "none"; //
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName("tr");
    for (var i = 1; i < tr.length; i++) {
      tr[i].style.display = "";  
    }
  }
