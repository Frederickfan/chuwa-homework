// Question 1
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.textAlign = "center";
table.style.marginBottom = "50px";
table.style.marginTop = "50px";
document.body.appendChild(table);

// create table header row
const headerRow = document.createElement("tr");
const tableHeader = tableInfo.tableHeader;
const headerRowElements = tableHeader.map(function (value) {
  const header = document.createElement("th");
  header.textContent = value;
  return header;
});
headerRow.append(...headerRowElements);
table.append(headerRow);

// define function to generate a single row according to the row data.
// rowData is an array containing the values needed for the current row.(extracted from object)
function generateRow(rowData) {
  const singleRow = document.createElement("tr");

  const rowElements = rowData.map(function (value) {
    const cell = document.createElement("td");
    cell.textContent = value;
    return cell;
  });
  singleRow.append(...rowElements);
  return singleRow;
}

// generate each row.
for (let row of tableInfo.tableContent) {
  console.log(row);
  const rowData = Object.values(row);
  table.append(generateRow(rowData));
}

// styling
const th = document.querySelectorAll("th");
const td = document.querySelectorAll("td");
th.forEach(function (value) {
  value.style.border = "2px solid black";
  value.style.padding = "20px";
  value.style.paddingTop = "8px";
  value.style.paddingBottom = "8px";
});
td.forEach(function (value) {
  value.style.border = "2px solid black";
  value.style.padding = "20px";
  value.style.paddingTop = "8px";
  value.style.paddingBottom = "8px";
});

// Question 2
const orderedButton = document.getElementById("orderedButton");
const orderedList = document.getElementById("orderedList");
const unorderedButton = document.getElementById("unorderedButton");
const unorderedList = document.getElementById("unorderedList");

const listValues = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
const orderedListValues = listValues.slice();
const unorderedListValues = listValues.slice();

orderedButton.onclick = function () {
  const listVal = orderedListValues.shift();
  const listElement = document.createElement("li");
  listElement.textContent = listVal;
  orderedList.appendChild(listElement);
};

unorderedButton.onclick = function () {
  const listVal = unorderedListValues.shift();
  const listElement = document.createElement("li");
  listElement.textContent = listVal;
  unorderedList.appendChild(listElement);
};

// Question 3
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const select = document.getElementById("dropdown");
dropDownList.forEach(function (listObj) {
  const option = document.createElement("option");
  option.value = listObj.value;
  option.textContent = listObj.content;
  select.append(option);
});

("why we cannot create select here and append");
/*
const form = document.createElement('form');
const select = document.createElement('select');
form.appendChild(select);
dropDownList.forEach(function (listObj) {
  const option = document.createElement("option");
  option.value = listObj.value;
  option.textContent = listObj.content;
  select.appendChild(option);
});
*/
