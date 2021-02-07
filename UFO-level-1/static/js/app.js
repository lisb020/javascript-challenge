// from data.js
let tableData = data;
let dateVar = "1/12/2010";

// filter for date
dateTable = tableData.filter(dt => dt.datetime === dateVar);
console.log(dateTable);
