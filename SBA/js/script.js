const toyData = [
    { id: 1, category: "Action Figures", stock: 45 },
    { id: 2, category: "Dolls", stock: 30 },
    { id: 3, category: "Educational Toys", stock: 25 },
    { id: 4, category: "Puzzles", stock: 50 },
    { id: 5, category: "Board Games", stock: 60 }
];

function populateToyStats(){
    //access the table body to attach rows 
    const tableBody = document.querySelector("#toy-stats-table tbody");

    //Iterate through the tableData array
    toyData.forEach((toy)=>{
        // for each object 
        //create a row 
        const row = document.createElement("tr");
        //create an td and assign it to the id column 
        const idCell = document.createElement("td");
        // create td for the category 
        const categoryCell = document.createElement("td"); 
        //create a td for stock column
        const stockCell = document.createElement("td");
        
        //dynamically assign the value of id to id cell and append it to the row
        idCell.textContent = toy.id; 
        row.appendChild(idCell); 

        //dynamically assign the value of category to category cell and append it to the row
        categoryCell.textContent = toy.category; 
        row.appendChild(categoryCell);
        
        //dynamically assign the value of stock to stock cell and append it to the row
        stockCell.textContent = toy.stock; 
        row.appendChild(stockCell); 

        //add the row to the table
        tableBody.appendChild(row);

    }); 
}

// run the function when the document is loaded
document.addEventListener("DOMContentLoaded", populateToyStats); 
