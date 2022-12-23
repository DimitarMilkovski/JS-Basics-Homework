
let numberOfRows = document.getElementById('rowInput');
let numberOfColumns = document.getElementById('columnInput');
let submitBtn = document.getElementById ('submitButton');
let tableTag = document.getElementById ('dynamicTable')

function createTable(rows, columns){
    
    if(isNaN(rows)=== false && isNaN(columns) === false){

        for (let i = 1; i<=rows;i++){
            tableTag.innerHTML += `<tr id ="row${i}" style="border: 1px solid black;"></tr>`;
            let rowTag = document.getElementById(`row${i}`);
            for (let k = 1; k<=columns; k++){
                rowTag.innerHTML += `<td style="border: 1px solid black;">Row ${i}, Column ${k}.</td>`;
            }
        }  
    }
    else{
        alert ('you entered wrong input for rows or columns! Please try again')
    }
}

submitBtn.addEventListener('click', function (){
    tableTag.innerHTML = '';
    createTable (numberOfRows.value, numberOfColumns.value);

});

