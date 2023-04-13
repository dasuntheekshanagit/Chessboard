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
    #position;
    constructor(side,piece,position){
        this.#side = side;
        this.piece = piece;
        this.#position = position;
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
    #position;
    constructor(side,piece,position){
        this.#side = side;
        this.piece = piece;
        this.#position = position;
    }
    showpath(){}
}

class Bishop{
    #side;
    #position;
    constructor(side,piece,position){
        this.#side = side;
        this.piece = piece;
        this.#position = position;
    }
    showpath(){}
}

class King{
    #side;
    #position;
    constructor(side,piece,position){
        this.#side = side;
        this.piece = piece;
        this.#position = position;
    }
    showpath(){}
}

class Queen{
    #side;
    #position;
    constructor(side,piece,position){
        this.#side = side;
        this.piece = piece;
        this.#position = position;
    }
    showpath(){}
}

class Pawn {
    #side;
    #position;
    
    constructor(side, piece, position) {
        this.#side = side;
        this.piece = piece;
        this.#position = position;
    }
    
    showpath() {
        if (this.#side == 'W' && this.#position >= 9) {
            console.log(this.#position - 8);
        }else{
            if (this.#side == 'B' && this.#position <= 56) {
                console.log(this.#position + 8);
            }
        }
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
    //rooks
    let rbl = new Rook('B','RB',1);
    let rwl = new Rook('W','RW',57);
    let rbr = new Rook('B','RB',8);
    let rwr = new Rook('W','RW',64);

    //knights
    let nbl = new Knight('B','NB',2);
    let nwl = new Knight('W','NW',58);
    let nbr = new Knight('B','NB',7);
    let nwr = new Knight('W','NW',63);

    //bishops
    let bbl = new Bishop('B','BB',3)
    let bwl = new Bishop('W','BW',59)
    let bbr = new Bishop('B','BB',6)
    let bwr = new Bishop('W','BW',61)

    //king and queen
    let kb = new King('B','KB',4)
    let kw = new King('W','KW',60)
    let qb = new Queen('B','QB',5)
    let qw = new Queen('W','QW',61)

    board[0] = [rbl,nbl,bbl,kb,qb,bbr,nbr,rbr]

    //black pawns
    for (let i= 0;i <8;i++){
        let p = new Pawn('B','PB',i+9)
        board[1][i] = p;
    }

    board[7] = [rwl,nwl,bwl,kw,qw,bwr,nwr,rwr]

    //white pawns
    for (let i= 0;i <8;i++){
        let p = new Pawn('W','PW',i+49)
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
                let p = board[i][j];
                img.setAttribute("src",pieces[p.piece]);
                img.addEventListener("click", function() {
                    p.showpath();
                });
                divData.appendChild(img);
            }
        }
    }
}

drawBoard();
initiateBoard();
addPieces();