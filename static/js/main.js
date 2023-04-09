// Create a center tag to center all the elements
let parentDiv = document.querySelector("#board");

let alphas = "abcdefgh".split("");
let nums = "87654321".split("");
const pieces = {
    'rook': 'static/img/pieces/Chess_rlt45.svg',
    'knight': 'static/img/pieces/Chess_nlt45.svg',
    'bishop': 'static/img/pieces/Chess_blt45.svg',
    'queen': 'static/img/pieces/Chess_qlt45.svg',
    'king': 'static/img/pieces/Chess_klt45.svg',
    'pawn': 'static/img/pieces/Chess_plt45.svg'
  };

let moves = {
    'a8':'rook','h8':'rook','a1':'rook','h1':'rook',
    'b8':'knight','g8':'knight','b1':'knight','g1':'knight',
    'c8':'bishop','f8':'bishop','c1':'bishop','f1':'bishop',
    'd8':'queen','e8':'king','d1':'queen','e1':'king',
    'a7':'pawn','b7':'pawn','c7':'pawn','d7':'pawn','e7':'pawn','f7':'pawn','g7':'pawn','h7':'pawn',
    'a2':'pawn','b2':'pawn','c2':'pawn','d2':'pawn','e2':'pawn','f2':'pawn','g2':'pawn','h2':'pawn'
}
// create a table element

//Add boader with alpha
addboarder();

// Main content
for (let i=0;i<8;i++){
    // Create a row
    let divRow = document.createElement("div");
    divRow.setAttribute("class","div-row");

    //Add boader with number
    let divData = document.createElement("div");
    divData.setAttribute("class","boarder-box-2");
    divData.innerHTML = nums[i];
    divRow.appendChild(divData);

    for (let j=0;j<8;j++){
        // Create a cell
        let divData = document.createElement("div");
        let boxId = alphas[j] + nums[i];

        // Even cells are white cells else black cells
        if ((i+j) % 2 == 0){
            // Create a class attribute for all white cells
            divData.setAttribute("class","piece-box white-box");
            divData.setAttribute("id",boxId);
        }else{
            divData.setAttribute("class","piece-box black-box");
            divData.setAttribute("id",boxId);
        }
        if (boxId in moves){
        let img = document.createElement("img");
        img.setAttribute("src",pieces[moves[boxId]]);
        divData.appendChild(img);}
        // Append the cell
        divRow.appendChild(divData);
    }

    //Add boader with number
    let divData2 = document.createElement("div");
    divData2.setAttribute("class","boarder-box-2");
    divData2.innerHTML = nums[i];
    divRow.appendChild(divData2);
    parentDiv.appendChild(divRow);
}

parentDiv.setAttribute("cellspacing","0");
document.body.appendChild(parentDiv);

addboarder();

function addboarder(){
    let divRow = document.createElement("div");
    divRow.setAttribute("class","div-row");

    let divData = document.createElement("div");
    divData.setAttribute("style","width:40px;height:40px;background-color:brown;");
    divRow.appendChild(divData);

    for (let i = 0; i <8;i++) {
        let divData = document.createElement("div");
        divData.setAttribute("class","boarder-box");
        divData.innerHTML = alphas[i].toLocaleUpperCase();
        divRow.appendChild(divData);
    }
    let divData2 = document.createElement("div");
    divData2.setAttribute("style","width:40px;height:40px;background-color:brown;");
    divRow.appendChild(divData2);

    parentDiv.appendChild(divRow);
}