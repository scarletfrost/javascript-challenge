// from data.js
var tableData = data;
var filter_btn = d3.select('#filter-btn');
var ufo_tbl = d3.select('#ufo-table');
var tbody = d3.select("tbody");

filter_btn.on("click", function(){
    
    tbody.text("");

    // Take data from the input field
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");

    let filtered = tableData;

    //filter data with the input by using multiple if loops.
    
    if(date !== "")
    {filtered = filtered.filter(row => row.datetime === date)}

    if (city !== "")
    {filtered = filtered.filter(row => row.city === city);}

    if(state !== "")
    {filtered = filtered.filter(row => row.state === state);}

    if(country !== "")
    {filtered = filtered.filter(row => row.country === country);}

    if (shape !== "")
    {filtered = filtered.filter(row => row.shape === shape);};


    console.log(filtered);

    filtered.forEach((datarow) => {
        var row = tbody.append("tr");
        Object.entries(datarow).forEach(
            ([key, value]) => 
            {var cell = row.append("td");
            cell.text(value);} );
      });
      
});
