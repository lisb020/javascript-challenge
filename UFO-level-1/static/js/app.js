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
  
  // Select the input element and get the raw HTML node
  let input = d3.select("#datetime");
  
  // Get the value property of the input element
  let inputValue = input.property("value");
  
  let filteredData = [];
  
  // Use the form input to filter for date
  if (inputValue !== "") { 
    filteredData = tableData.filter(dt => dt.datetime === inputValue);
  }
  else {
    filteredData = tableData;
  }

  // clear previous entries
  tableBody.html("");

  // load filtered list items
  filteredData.forEach(tableAppend);
}