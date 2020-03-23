// from data.js
var tableData = data;
var filter_btn = d3.select('#filter-btn');
var ufo_tbl = d3.select('#ufo-table');
var tbody = d3.select("tbody");

filter_btn.on("click", function(){
    
    tbody.text("");

    // Take data from the input field
    var date = d3.select("#datetime").property("value");
    //filter data with the input
    var filtered = tableData.filter(row => row.datetime === date);
    console.log(filtered);

    filtered.forEach((datarow) => {
        var row = tbody.append("tr");
        Object.entries(datarow).forEach(
            ([key, value]) => 
            {var cell = row.append("td");
            cell.text(value);} );
      });
      
});
