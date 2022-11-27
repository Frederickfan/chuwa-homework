// Question 1 
// a.) Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
function generateArray1(items) {
    const newItems = Array(); 

    for (let i = 0; i < items.length; i++) {
        newItems.push({quantity: items[i].quantity * 2, price: items[i].price * 2});
    }

    return newItems; 
}

// b.) Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
function generateArray2(items) {
    const newItems = Array();

    for (let i = 0; i < items.length; i++) {
        if (items[i].quantity > 2 && items[i].price > 300) {
            newItems.push({quantity: items[i].quantity, price: items[i].price});
        }
    }

    return newItems; 
}

// c). Given the array, implement a function to calculate the total value of the items.
function generateArray3(items) {
    const newItems = Array();
    let totalValue = 0; 

    for (let i = 0; i < items.length; i++) {
        totalValue += items[i].price;
    }

    return totalValue;
}


const items = [
    {quantity: 1, price: 200}, 
    {quantity: 3, price: 350}, 
    {quantity: 5, price: 400},
]; 

console.log(generateArray1(items));
console.log(generateArray2(items));
console.log(generateArray3(items));

// Question 2 
// Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
const string = ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';
const expectedReturnString = 'perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array';

function filterString(string) {
    const lowerCaseString = string.replace(/[^a-zA-Z0-9]/g, " ");
    lowerCaseString.trim();
    const lowerCaseArray = lowerCaseString.split(/\s+/); 
    console.log(lowerCaseArray);
    const result = new Array(); 

    for (let i = 0; i < lowerCaseArray.length; i++) {
        if (lowerCaseArray[i] != "") {
            result.push(lowerCaseArray[i]);
        }
    }

    return result.join(" ");
}

console.log(filterString(string));

// Question 3 
// Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
const first = [
    { uuid: 2, name: 'test' },
    { uuid: 5, name: 'test5' },
    { uuid: 3, name: 'test3' },
  ];
  
  const second = [
    { uuid: 6, role: 'pm' },
    { uuid: 4, role: 'engineer' },
    { uuid: 1, role: 'manager' },
    { uuid: 2, role: 'associate' },
  ];
  
  const expectedReturnArray = [
    { uuid: 1, role: 'manager', name: null },
    { uuid: 2, role: 'associate', name: 'test' },
    { uuid: 3, role: null, name: 'test3' },
    { uuid: 4, role: 'engineer', name: null },
    { uuid: 5, role: null, name: 'test5' },
    { uuid: 6, role: 'pm', name: null },
  ];

function merge(array1, array2) {
    const uuidTable = {};

    for (let i = 0; i < array1.length; i++) {
        let item = array1[i]; 
        let itemUUID = item.uuid;

        uuidTable[itemUUID] = {uuid:item.uuid, role: null, name: item.name};
    }

    console.log(uuidTable);

    for (let i = 0; i < array2.length; i++) {
        let item = array2[i];
        let itemUUID = item.uuid; 

        if (itemUUID in uuidTable) {
            uuidTable[itemUUID].role = item.role;
        } else {
            uuidTable[itemUUID] = {uuid:item.uuid, role:item.role, name:null};
        }
    }

    return Object.values(uuidTable);
}

console.log(merge(first, second));