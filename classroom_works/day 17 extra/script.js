const sudoku=[
    [5,0,9,0,0,0,4,0,0],
    [7,0,8,3,0,4,9,0,0],
    [6,0,1,0,0,0,7,3,0],
    [4,6,2,5,0,0,0,0,0],
    [3,8,5,7,2,0,6,4,9],
    [1,0,7,4,0,8,2,0,0],
    [2,0,0,1,0,0,0,0,4],
    [0,0,3,0,4,0,0,8,7],
    [0,7,0,0,5,3,0,0,6]
];

// table uusgen table aa id-gaar n barij avav
const tableTarget = document.querySelector('#tableTarget');

const tbody = document.createElement('tbody');

let chosenTD;

for(let row=0; row<sudoku.length; row++){
    const cols = sudoku[row];
    const tr= document.createElement('tr');
    for(let col=0; col<cols.length; col++){
        const td= document.createElement('td');
        td.setAttribute('x', row);
        td.setAttribute('y', col);
        if(cols[col]!==0){
            td.className = 'default';
            td.innerHTML = cols[col];
        }else{
            td.addEventListener('click', function(e){
                if(chosenTD){
                    chosenTD.classList.remove('active');
                }
                chosenTD = e.target;
                e.target.classList.add('active');
            });
        }
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
tableTarget.appendChild(tbody);

const validKeys='0123456789';

document.addEventListener('keypress', function(e){
    const key = e.key;
    if(validKeys.includes(key)){
        if(key === '0'){
            chosenTD.innerHTML = '';
        }else{
            chosenTD.innerHTML = key;
        }
    }

    const x= Number(chosenTD.getAttribute('x'));
    const y= Number(chosenTD.getAttribute('y'));
    const input = Number(key);
    sudoku[x][y]= input;

    const rowDuplicates = isDuplicatedByRow(x,y,input);
    const colDuplicates = isDuplicatedByCol(x,y,input);
    const boxDuplicates = isDuplicatedByBox(x,y,input);
    const hasError= rowDuplicates || colDuplicates || boxDuplicates;
    if(hasError){
        chosenTD.classList.add('error');
    }else{
        chosenTD.classList.remove('error');
    }
});

function isDuplicatedByRow(x,y,input){
     // hewtee tenhlegiin daguu shalgah nuhtsul
    let duplicated = false;
    for(let i=0; i < 9 ; i++){
        if(i !== y && !duplicated && sudoku[x][i]!==0){
           duplicated = input === sudoku[x][i];
        }
    }
    return duplicated;
}
function isDuplicatedByCol(x,y,input){
     // bosoo tenhlegiin daguu shalgah nuhtsul
    let duplicated = false;
    for(let i=0; i < 9 ; i++){
        if(i !== x && !duplicated && sudoku[i][y] !== 0){
           duplicated = input === sudoku[i][y];
        }
    }
    return duplicated;
}

function isDuplicatedByBox(x,y,input){
    // box iin daguu shalgah nuhtsul
    let duplicated = false;

    for(let i=0; i < 3 ; i++){
        if(i !== x && !duplicated && sudoku[i][y] !== 0){
        duplicated = input === sudoku[i][y];
        }
    }
    
    for(let j=0; j < 3; j++){
        if(j!==y && !duplicated && sudoku[x][j] !== 0){
        duplicated = input === sudoku[x][j];
        }
    }
    return duplicated;
}