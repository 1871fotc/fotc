
// TODO Not working -  Listen for when Enter is pressed in the Input, and then Search the index //  

/*
  var listenForEnter = document.getElementById("myInput");
  listenForEnter.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
       alert('Enter is pressed!');
//       searchIndex();//
//     event.preventDefault(); //
//     document.getElementById("searchButton").click(); //
    }
  }); 
*/  

/* TODO Hack to get working. Note it only works on Desktops */
/* const hark = document.getElementById('myInput'); */

document.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
      document.getElementById("searchButton").style.background = "#df41fb";
      event.preventDefault();
// change search icon color to hover color //        
      searchIndex();
  };
// If search input is empty, call clearInput to show the whole table. see https://www.w3schools.com/js/js_validation.asp //
  let x = document.getElementById("myInput").value;
  if (x == "") {
    clearInput();
  };
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
// search whole table //    
    for(var j = 0; j < tds.length; j++){ 
// only search names //
//    for(var j = 0; j < 2; j++){ //
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
  };
// reset search icon color  //        
  document.getElementById("searchButton").style.background = "#7e56c2";
}



// When Reset button is pressed, clear the Input, ~~hide the Reset button~~, show all table rows //

  function clearInput() {
    var tr, i;
    document.getElementById("searchButton").style.background = "#7e56c2";
    document.getElementById('myInput').value = '';
//    document.getElementById('resetButton').style.display = "none"; //
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName("tr");
    for (var i = 1; i < tr.length; i++) {
      tr[i].style.display = "";  
    }
  }
