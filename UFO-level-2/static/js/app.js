// from data.js
let tableData = data;

// load table
// get table body element
let tableBody = d3.select("tbody");

// function to look through each item
function tableAppend(filtRow) {
  // Append tr to tbody for each entry in filteredData
  var row = tableBody.append("tr");
  // Loop through each value in the row to add to a column
  Object.entries(filtRow).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  })
}

// load all list items
tableData.forEach(tableAppend);

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // function selects the input element and gets the value
  function inputValue (element) {
    return d3.select(element).property("value");
  }
  
  // filters the data based on inputValue function
  let filteredData=tableData.filter(item => (item.datetime === inputValue("#datetime") || inputValue("#datetime") === "") 
    && (item.city === inputValue("#City") || inputValue("#City") === "")
    && (item.state === inputValue("#State") || inputValue("#State") === "")
    && (item.country === inputValue("#Country") || inputValue("#Country") === "") 
    && (item.shape === inputValue("#Shape") || inputValue("#Shape") === ""));

  // clear previous entries
  tableBody.html("");

  // load filtered list items
  filteredData.forEach(tableAppend);
}