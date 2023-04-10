// Create a center tag to center all the elements
let parentDiv = document.querySelector("#board");

let alphas = "abcdefgh".split("");
let nums = "87654321".split("");

const pieces = {
    'rook': 'static/img/pieces/Chess_rlt45.svg',
    'rook_black': 'static/img/pieces/black_Chess_rlt45.svg',

    'knight': 'static/img/pieces/Chess_nlt45.svg',
    'knight_black': 'static/img/pieces/black_Chess_nlt45.svg',

    'bishop': 'static/img/pieces/Chess_blt45.svg',
    'bishop_black': 'static/img/pieces/black_Chess_blt45.svg',

    'queen': 'static/img/pieces/Chess_qlt45.svg',
    'queen_black': 'static/img/pieces/black_Chess_qlt45.svg',

    'king': 'static/img/pieces/Chess_klt45.svg',
    'king_black': 'static/img/pieces/black_Chess_klt45.svg',

    'pawn': 'static/img/pieces/Chess_plt45.svg',
    'pawn_black': 'static/img/pieces/black_Chess_plt45.svg'
  };

let moves = {
    'a8':'rook_black','h8':'rook_black','a1':'rook','h1':'rook',
    'b8':'knight_black','g8':'knight_black','b1':'knight','g1':'knight',
    'c8':'bishop_black','f8':'bishop_black','c1':'bishop','f1':'bishop',
    'd8':'queen_black','e8':'king_black','d1':'queen','e1':'king',
    'a7':'pawn_black','b7':'pawn_black','c7':'pawn_black','d7':'pawn_black','e7':'pawn_black','f7':'pawn_black','g7':'pawn_black','h7':'pawn_black',
    'a2':'pawn','b2':'pawn','c2':'pawn','d2':'pawn','e2':'pawn','f2':'pawn','g2':'pawn','h2':'pawn'
}

/*
const pieces = {
    'rook-white': {
        image: 'static/img/pieces/Chess_rlt45.svg',
        color: 'white'
    },
    'knight-white': {
        image: 'static/img/pieces/Chess_nlt45.svg',
        color: 'white'
    },
    'bishop-white': {
        image: 'static/img/pieces/Chess_blt45.svg',
        color: 'white'
    },
    'queen-white': {
        image: 'static/img/pieces/Chess_qlt45.svg',
        color: 'white'
    },
    'king-white': {
        image: 'static/img/pieces/Chess_klt45.svg',
        color: 'white'
    },
    'pawn-white': {
        image: 'static/img/pieces/Chess_plt45.svg',
        color: 'white'
    },
    'rook-black': {
        image: 'static/img/pieces/Chess_rdt45.svg',
        color: 'black'
    },
    'knight-black': {
        image: 'static/img/pieces/Chess_ndt45.svg',
        color: 'black'
    },
    'bishop-black': {
        image: 'static/img/pieces/Chess_bdt45.svg',
        color: 'black'
    },
    'queen-black': {
        image: 'static/img/pieces/Chess_qdt45.svg',
        color: 'black'
    },
    'king-black': {
        image: 'static/img/pieces/Chess_kdt45.svg',
        color: 'black'
    },
    'pawn-black': {
        image: 'static/img/pieces/Chess_pdt45.svg',
        color: 'black'
    }
};

let moves = {
    'a8':'rook-black','h8':'rook-black','a1':'rook-white','h1':'rook-white',
    'b8':'knight-black','g8':'knight-black','b1':'knight-white','g1':'knight-white',
    'c8':'bishop-black','f8':'bishop-black','c1':'bishop-white','f1':'bishop-white',
    'd8':'queen-black','e8':'king-black','d1':'queen-white','e1':'king-white',
    'a7':'pawn-black','b7':'pawn-black','c7':'pawn-black','d7':'pawn-black','e7':'pawn-black','f7':'pawn-black','g7':'pawn-black','h7':'pawn-black',
    'a2':'pawn-white','b2':'pawn-white','c2':'pawn-white','d2':'pawn-white','e2':'pawn-white','f2':'pawn-white','g2':'pawn-white','h2':'pawn-white'
}
*/
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
    divData.setAttribute("style","width:40px;height:40px;background-color:rgb(43, 43, 43);");
    divRow.appendChild(divData);

    for (let i = 0; i <8;i++) {
        let divData = document.createElement("div");
        divData.setAttribute("class","boarder-box");
        divData.innerHTML = alphas[i].toLocaleUpperCase();
        divRow.appendChild(divData);
    }
    let divData2 = document.createElement("div");
    divData2.setAttribute("style","width:40px;height:40px;background-color:rgb(43, 43, 43);");
    divRow.appendChild(divData2);

    parentDiv.appendChild(divRow);
}

  