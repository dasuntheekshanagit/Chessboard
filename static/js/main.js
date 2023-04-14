// Create a center tag to center all the elements
let parentDiv = document.querySelector("#board");

let alphas = "abcdefgh".split("");
let nums = "87654321".split("");

let drag;

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
    constructor(side,piece,position,id){
        this.#side = side;
        this.piece = piece;
        this.#position = position;
        this.id = id;
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
    constructor(side,piece,position,id){
        this.#side = side;
        this.piece = piece;
        this.#position = position;
        this.id = id;
    }
    showpath(){}
}

class Bishop{
    #side;
    #position;
    constructor(side,piece,position,id){
        this.#side = side;
        this.piece = piece;
        this.#position = position;
        this.id = id;
    }
    
    showpath() {
        clearhilight();
        let row = Math.floor((this.position - 1) / 8);
        let col = (this.position - 1) % 8;
    
        // Check diagonal moves towards top left
        let i = row - 1;
        let j = col - 1;
        while (i >= 0 && j >= 0) {
            let next = i * 8 + j + 1;
            let divData = document.getElementById('' + next);
            divData.setAttribute('class', 'piece-box showpath');
            i--;
            j--;
        }
    
        // Check diagonal moves towards top right
        i = row - 1;
        j = col + 1;
        while (i >= 0 && j < 8) {
            let next = i * 8 + j + 1;
            let divData = document.getElementById('' + next);
            divData.setAttribute('class', 'piece-box showpath');
            i--;
            j++;
        }
    
        // Check diagonal moves towards bottom left
        i = row + 1;
        j = col - 1;
        while (i < 8 && j >= 0) {
            let next = i * 8 + j + 1;
            let divData = document.getElementById('' + next);
            divData.setAttribute('class', 'piece-box showpath');
            i++;
            j--;
        }
    
        // Check diagonal moves towards bottom right
        i = row + 1;
        j = col + 1;
        while (i < 8 && j < 8) {
            let next = i * 8 + j + 1;
            let divData = document.getElementById('' + next);
            divData.setAttribute('class', 'piece-box showpath');
            i++;
            j++;
        }
    }
    
}

class King{
    #side;
    #position;
    constructor(side,piece,position,id){
        this.#side = side;
        this.piece = piece;
        this.#position = position;
        this.id = id;
    }
    showpath(){}
}

class Queen{
    #side;
    #position;
    constructor(side,piece,position,id){
        this.#side = side;
        this.piece = piece;
        this.#position = position;
        this.id = id;
    }
    showpath(){}
}

class Pawn {
    #side;
    constructor(side, piece, position,id) {
        this.#side = side;
        this.piece = piece;
        this.position = position;
        this.id = id;

        // Add event listeners for drag and drop
        //this.addDragDropListeners();
    }
    
    showpath() {
        clearhilight();
        let next = this.position;
        let divData;
        /*let doubleJump = false;
        if (this.#side == 'W' && this.#position >= 9) {
          next = this.#position - 8;
          if (this.#position >= 49 && this.#position <= 56) {
            doubleJump = true;
          }
        } else {
          if (this.#side == 'B' && this.#position <= 56) {
            next = this.#position + 8;
            if (this.#position >= 9 && this.#position <= 16) {
              doubleJump = true;
            }
          }
        }*/
        //let row = Math.floor(next/8);
        //let col =  next%8;
        //let divData = document.getElementById(alphas[col-1]+nums[row]);
        //divData.setAttribute("class","piece-box showpath");
      
        //if (doubleJump) {
          if (this.#side == 'W') {
            next = next - 8;
          } else {
            next = next + 8;
          }
          //row = Math.floor(next/8);
          //col =  next%8;
          divData = document.getElementById(''+next);
          divData.setAttribute("class","piece-box showpath");
       // }
      }

      /*addDragDropListeners() {
        let piece = this;
        //let divData = document.getElementById(alphas[(this.#position % 8) - 1] + nums[Math.floor(this.#position / 8)]);
        let row = Math.floor(this.#position/8);
        let col =  this.#position%8;
        let divData = document.getElementById(this.id);
    
        // Add the "draggable" attribute to the piece's div element
        divData.setAttribute("draggable", "true");
    
        // Add the "ondragstart" event listener to start the drag event
        divData.ondragstart = function (event) {
          // Set the drag data (i.e., the ID of the piece) and add a "dragging" class to the piece's div
          event.dataTransfer.setData("text", piece.id);
          divData.classList.add("dragging");
        };
    
        // Add the "ondragend" event listener to end the drag event
        divData.ondragend = function () {
          // Remove the "dragging" class from the piece's div
          divData.classList.remove("dragging");
        };
    
        // Add the "ondragover" event listener to allow the piece to be dropped on a square
        divData.ondragover = function (event) {
          // Prevent default to allow the drop
          event.preventDefault();
        };
    
        // Add the "ondrop" event listener to handle the drop event
        divData.ondrop = function (event) {
          // Prevent default to avoid reloading the page
          event.preventDefault();
    
          // Get the ID of the dropped piece
          let id = event.dataTransfer.getData("text");
    
          // Get the div element of the dropped piece and remove the "dragging" class
          let droppedPiece = document.getElementById(id);
          droppedPiece.classList.remove("dragging");
    
          // Get the div element of the target square and add the dropped piece to it
          let targetSquare = event.target;
          targetSquare.appendChild(droppedPiece);
        };
      }*/
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
                divData.setAttribute("id",''+(8*(i)+(j+1)));
            }else{
                divData.setAttribute("class","piece-box black-box");
                divData.setAttribute("id",''+(8*(i)+(j+1)));
            }
            divData.addEventListener("dragover", function(event) {
                event.preventDefault();
            });

            divData.addEventListener("drop", function(event) {
                //const data = event.dataTransfer.getData("id");
                //console.log(event.target);
                dragfun(event.target.id);
                //const draggableElement = document.getElementById(data);
                //const dropzone = event.target;
                //dropzone.appendChild(draggableElement);
              });

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
    let rbl = new Rook('B','RB',1,'RBL');
    let rwl = new Rook('W','RW',57,'RWL');
    let rbr = new Rook('B','RB',8,'RBR');
    let rwr = new Rook('W','RW',64,'RWR');

    //knights
    let nbl = new Knight('B','NB',2,'NBL');
    let nwl = new Knight('W','NW',58,'NWL');
    let nbr = new Knight('B','NB',7,'NBR');
    let nwr = new Knight('W','NW',63,'NWR');

    //bishops
    let bbl = new Bishop('B','BB',3,'BBL')
    let bwl = new Bishop('W','BW',59,'BWL')
    let bbr = new Bishop('B','BB',6,'BBR')
    let bwr = new Bishop('W','BW',62,'BWR')

    //king and queen
    let kb = new King('B','KB',4,'KB')
    let kw = new King('W','KW',60,'KW')
    let qb = new Queen('B','QB',5,'Qb')
    let qw = new Queen('W','QW',61,'QW')

    board[0] = [rbl,nbl,bbl,kb,qb,bbr,nbr,rbr]

    //black pawns
    for (let i= 0;i <8;i++){
        let p = new Pawn('B','PB',i+9,'PB'+i)
        board[1][i] = p;
    }

    board[7] = [rwl,nwl,bwl,kw,qw,bwr,nwr,rwr]

    //white pawns
    for (let i= 0;i <8;i++){
        let p = new Pawn('W','PW',i+49,'PW'+i)
        board[6][i] = p;
    }
}

function addPieces(){
    for (let i = 0; i < 8 ;i++){
        for (let j = 0; j < 8 ;j ++){
            if (board[i][j]){
                //let boxId = alphas[j] + nums[i];
                let divData = document.getElementById(''+(8*(i)+(j+1)));
                let img = document.createElement("img");
                let p = board[i][j];
                img.setAttribute("src",pieces[p.piece]);
                img.setAttribute("id",p.id);
                img.addEventListener("click", function() {
                    p.showpath();
                });
                img.addEventListener("dragstart", function(event) {
                    p.showpath();
                    drag = p;
                });
                divData.appendChild(img);
            }
        }
    }
}

function clearhilight(){
    for (let i = 0; i < 8 ;i++){
        for (let j = 0; j < 8 ;j ++){
            //let boxId = alphas[j] + nums[i];
            let divData = document.getElementById((''+(8*(i)+(j+1))));
            if ((i+j) % 2 == 0){
                divData.setAttribute("class","piece-box white-box");
            }else{
                divData.setAttribute("class","piece-box black-box");
            }
        }
    }
}

function dragfun(target){
    drag.position = Number(target);
    let img = document.getElementById(drag.id);
    let targetcel = document.getElementById(target);
    targetcel.appendChild(img);
}

drawBoard();
initiateBoard();
addPieces();