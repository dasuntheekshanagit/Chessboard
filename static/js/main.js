// Create a center tag to center all the elements
let parentDiv = document.querySelector("#board");

let alphas = "abcdefgh".split("");
let nums = "87654321".split("");

const pieces = {
    'RW': 'static/img/pieces/Chess_rlt45.svg',
    'RB': 'static/img/pieces/black_Chess_rlt45.svg',

    'NW': 'static/img/pieces/Chess_nlt45.svg',
    'NB': 'static/img/pieces/black_Chess_nlt45.svg',

    'BW': 'static/img/pieces/Chess_blt45.svg',
    'BB': 'static/img/pieces/black_Chess_blt45.svg',

    'QW': 'static/img/pieces/Chess_qlt45.svg',
    'QB': 'static/img/pieces/black_Chess_qlt45.svg',

    'KW': 'static/img/pieces/Chess_klt45.svg',
    'KB': 'static/img/pieces/black_Chess_klt45.svg',

    'PW': 'static/img/pieces/Chess_plt45.svg',
    'PB': 'static/img/pieces/black_Chess_plt45.svg'
  };

let board = [[ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
             [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
             [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
             [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
             [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
             [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
             [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
             [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ]]

class Rook{
    #side;
    constructor(side,piece){
        this.#side = side;
        this.piece = piece;
    }
    /*showpath(){
        let goes = [];
        let x = nums.indexOf(this.position[0]);
        let y = alphas.indexOf(this.position[1]);
        let xl = []
        for (let i = 8; i > x; i--){

        }
        let xr = nums.slice(x+1,7);
        let yu = alphas.slice(y+1,7);
        let yd = alphas.slice(0,y-1);
        console.log(xl);
        console.log(xr); 
        console.log(yu); 
        console.log(yd);  
    }*/
}

class Knight{
    #side;
    constructor(side,piece){
        this.#side = side;
        this.piece = piece;
    }
}

class Bishop{
    #side;
    constructor(side,piece){
        this.#side = side;
        this.piece = piece;
    }
}

class King{
    #side;
    constructor(side,piece){
        this.#side = side;
        this.piece = piece;
    }
}

class Queen{
    #side;
    constructor(side,piece){
        this.#side = side;
        this.piece = piece;
    }
}

class Pawn{
    #side;
    constructor(side,piece){
        this.#side = side;
        this.piece = piece;
    }
}

// create a table element
function drawBoard(){
    //Add boader with alpha
    addBoarder();

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

    addBoarder();
}

function addBoarder(){
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

function initiateBoard(){
    let rbl = new Rook('B','RB')
    let rwl = new Rook('W','RW')
    let rbr = new Rook('B','RB')
    let rwr = new Rook('W','RW')

    let nbl = new Rook('B','NB')
    let nwl = new Rook('W','NW')
    let nbr = new Rook('B','NB')
    let nwr = new Rook('W','NW')

    let bbl = new Rook('B','BB')
    let bwl = new Rook('W','BW')
    let bbr = new Rook('B','BB')
    let bwr = new Rook('W','BW')

    let kb = new Rook('B','BB')
    let kw = new Rook('W','BW')
    let qb = new Rook('B','BB')
    let qw = new Rook('W','BW')

    board[0] = [rbl,nbl,bbl,kb,qb,bbr,nbr,rbr]
    for (let i= 0;i <8;i++){
        let p = new Pawn('B','PB')
        board[1][i] = p;
    }

    board[7] = [rwl,nwl,bwl,kw,qw,bwr,nwr,rwr]
    for (let i= 0;i <8;i++){
        let p = new Pawn('W','PW')
        board[6][i] = p;
    }
}

function addPieces(){
    for (let i = 0; i < 8 ;i++){
        for (let j = 0; j < 8 ;j ++){
            if (board[i][j]){
                let boxId = alphas[j] + nums[i];
                let divData = document.getElementById(boxId);
                let img = document.createElement("img");
                img.setAttribute("src",pieces[board[i][j].piece]);
                divData.appendChild(img);
            }
        }
    }
}

drawBoard();
initiateBoard();
addPieces();