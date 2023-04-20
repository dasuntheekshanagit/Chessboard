// Create a center tag to center all the elements
let parentDiv = document.querySelector("#board");

let alphas = "abcdefgh".split("");
let nums = "87654321".split("");

let drag ;

let pathc = [17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];

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
    constructor(side,piece,position,id){
        this.side = side;
        this.piece = piece;
        this.position = position;
        this.id = id;
    }
    showpath(){
        let path = [];
        let mv=0;
        clearhilight();
        let next = this.position+8;
        let divData;
        while (next <=64){
            if (check(next,this.side,mv)){break;};
            path.push(next);
            next += 8;
        }
        next = this.position;
        while (next%8 !=0){
            next += 1;
            if (check(next,this.side,mv)){break;};
            path.push(next);
        }
        next = this.position-1;
        while (next%8 !=0){
            if (check(next,this.side,mv)){break;};
            path.push(next);
            next -= 1;
        }
        next = this.position;
        while (next >=9){
            next -= 8;
            if (check(next,this.side,mv)){break;};
            path.push(next);
        }
        pathc = path;
        hilighed(path);
    }    
}

class Knight{
    constructor(side,piece,position,id){
        this.side = side;
        this.piece = piece;
        this.position = position;
        this.id = id;
    }
    showpath() {
        let path = [];
        let mv =0;
        clearhilight();
        let row = 8 - Math.floor((this.position - 1) / 8);
        let col = String.fromCharCode(65 + ((this.position - 1) % 8));
    
        let moves = [
          [2, -1],
          [2, 1],
          [1, -2],
          [1, 2],
          [-1, -2],
          [-1, 2],
          [-2, -1],
          [-2, 1]
        ];
    
        for (let move of moves) {
          let newRow = row + move[0];
          let newCol = String.fromCharCode(col.charCodeAt(0) + move[1]);
    
          if (newRow < 1 || newRow > 8 || newCol < 'A' || newCol > 'H') {
            continue;
          }
    
          let next = (8 - newRow) * 8 + (newCol.charCodeAt(0) - 65) + 1;
          if (check(next,this.side,mv)){continue;};
          path.push(next);
        }
        pathc = path;
        hilighed(path);
        
    }
}

class Bishop{
    constructor(side,piece,position,id){
        this.side = side;
        this.piece = piece;
        this.position = position;
        this.id = id;
    }
    
    showpath() {
        let path = [];
        let mv =0;
        clearhilight();
        let row = Math.floor((this.position - 1) / 8);
        let col = (this.position - 1) % 8;
    
        // Check diagonal moves towards top left
        let i = row - 1;
        let j = col - 1;
        while (i >= 0 && j >= 0) {
            let next = i * 8 + j + 1;
            if (check(next,this.side,mv)){break;};
            path.push(next);
            i--;
            j--;
        }
    
        // Check diagonal moves towards top right
        i = row - 1;
        j = col + 1;
        while (i >= 0 && j < 8) {
            let next = i * 8 + j + 1;
            if (check(next,this.side,mv)){break;};
            path.push(next);
            i--;
            j++;
        }
    
        // Check diagonal moves towards bottom left
        i = row + 1;
        j = col - 1;
        while (i < 8 && j >= 0) {
            let next = i * 8 + j + 1;
            if (check(next,this.side,mv)){break;};
            path.push(next);
            i++;
            j--;
        }
    
        // Check diagonal moves towards bottom right
        i = row + 1;
        j = col + 1;
        while (i < 8 && j < 8) {
            let next = i * 8 + j + 1;
            if (check(next,this.side,mv)){break;};
            path.push(next);
            i++;
            j++;
        }
        pathc = path;
        hilighed(path);
    }
}

class King{
    constructor(side,piece,position,id){
        this.side = side;
        this.piece = piece;
        this.position = position;
        this.id = id;
    }
    showpath(){
        let path = [];
        let mv =0;
        clearhilight();
        let row = Math.floor((this.position - 1) / 8);
        let col = (this.position - 1) % 8;

        // Check all 8 adjacent squares
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          // Skip the current position
            if (i == 0 && j == 0) continue;
  
            let newRow = row + i;
            let newCol = col + j;
  
            // Skip invalid positions
            if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7) continue;
  
            // Get square and highlight it
            let next = newRow * 8 + newCol + 1;
            if (check(next,this.side,mv)){continue;};
            path.push(next);
        }
      }
      pathc = path; 
      hilighed(path);
    }
}

class Queen{
    constructor(side,piece,position,id){
        this.side = side;
        this.piece = piece;
        this.position = position;
        this.id = id;
    }
    showpath(){
        let path = [];
        let mv =0;
        clearhilight();
        let row = Math.floor((this.position - 1) / 8);
        let col = (this.position - 1) % 8;
    
        // Check diagonal moves towards top left
        let i = row - 1;
        let j = col - 1;
        while (i >= 0 && j >= 0) {
            let next = i * 8 + j + 1;
            if (check(next,this.side,mv)){break;};
            path.push(next);
            i--;
            j--;
        }
    
        // Check diagonal moves towards top right
        i = row - 1;
        j = col + 1;
        while (i >= 0 && j < 8) {
            let next = i * 8 + j + 1;
            if (check(next,this.side,mv)){break;};
            path.push(next);
            i--;
            j++;
        }
    
        // Check diagonal moves towards bottom left
        i = row + 1;
        j = col - 1;
        while (i < 8 && j >= 0) {
            let next = i * 8 + j + 1;
            if (check(next,this.side,mv)){break;};
            path.push(next);
            i++;
            j--;
        }
    
        // Check diagonal moves towards bottom right
        i = row + 1;
        j = col + 1;
        while (i < 8 && j < 8) {
            let next = i * 8 + j + 1;
            if (check(next,this.side,mv)){break;};
            path.push(next);
            i++;
            j++;
        }
        
        // Check horizontal and vertical moves
        let next = this.position + 8;
        let divData;
        while (next <=64){
            if (check(next,this.side,mv)){break;};
            path.push(next);
            next += 8;
        }
        next = this.position;
        while (next%8 !=0){
            next += 1;
            if (check(next,this.side,mv)){break;};
            path.push(next);
        }
        next = this.position-1;
        while (next%8 !=0){
            if (check(next,this.side,mv)){break;};
            path.push(next);
            next -= 1;
        }
        next = this.position;
        while (next >=9){
            next -= 8;
            if (check(next,this.side,mv)){break;};
            path.push(next);
        }
        pathc = path;
        hilighed(path);
    } 
}
/*
class Pawn {
    #side;
    constructor(side, piece, position,id) {
        this.#side = side;
        this.piece = piece;
        this.position = position;
        this.id = id;
    }
    
    showpath() {
        let path = [];
        clearhilight();
        let next = this.position;
        let divData;
          if (this.#side == 'W') {
            next = next - 8;
          } else {
            next = next + 8;
          }
        if (!(check(next))){
            path.push(next);
            hilighed(path);
        }
      }
}
*/
class Pawn {
    constructor(side, piece, position, id) {
      this.side = side;
      this.piece = piece;
      this.position = position;
      this.id = id;
      
    }
  
    showpath() {
        let path = [];
        let mv =0;
        clearhilight();
        let next = this.position;
    
        //logic for initial 2 square move
        if ((this.side == 'W' && next >= 49 && next <= 56) || (this.side == 'B' && next >= 9 && next <= 16)) {
          if (this.side == 'W') {
            next -= 16;
          } else {
            next += 16;
          }
          if (!(check(next,this.side,mv))) {
            path.push(next);
           // hilighed(path);
          }
          if (this.side == 'W') {
            next += 8;
          } else {
            next -= 8;
          }
          if (!(check(next,this.side,mv))) {
            path.push(next);
            pathc = path;
            
          }
          hilighed(path);
          //return;
        }
    
        if (this.side == 'W') {
          next -= 8;
        } else {
          next += 8;
        }
        if (!(check(next,this.side,mv))) {
          path.push(next);
          pathc = path;
          hilighed(path);
        }
    
        let x = this.position;
        if (this.side == 'W') {
            x -= 7;
          } else {
            x += 7;
          }

        if (pcheck(x,this.side,mv)){
            path.push(x);
            //pathc = path;
            hilighed(path);
          }
          x = this.position;
          if (this.side == 'W') {
              x -= 9;
            } else {
              x += 9;
            }
          if (pcheck(x,this.side,mv)){
              path.push(x);
              pathc = path;
              hilighed(path);
            }
    }
    
  }
  
function hilighed(path){
    for(let i =0;i<path.length ; i++){
        divData = document.getElementById(''+path[i]);
        divData.setAttribute("class","piece-box showpath");
    }
}

function check(path,side,mv){
    let nextmv,i,j;
    [i,j] = calcij(path - 1);
    nextmv = board[i][j];
    //console.log(nextmv.side);
    if (nextmv.side == side){
        return true;
    }else{
        return false;
    }
}

function pcheck(path,side,mv){
    let nextmv,i,j;
    [i,j] = calcij(path - 1);
    nextmv = board[i][j];
    console.log(path,nextmv.side,side);
    
    if (((nextmv.side == 'W') && (side == 'B')) || ((nextmv.side == 'B') && (side == 'W'))){
        return true;
    }else{
        return false;
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
              divData.addEventListener("click", function(event) {
                //console.log(this.id);
                dragfun(this.id);
                
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
                    drag = p;
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

/*
function dragfun(target){
    let previ,prevj,nexti,nextj,next;
    [previ,prevj] = calcij(drag.position-1);
    next = Number(target);
    [nexti,nextj] = calcij(next-1);
    //console.log(next,board[nexti][nextj],drag.position);

    if (pathc.includes(next)){//console.log("valid");
    let targetcel = document.getElementById(target);
    let bnext = board[nexti][nextj];
    /*if (bnext){
        console.log(next,board[nexti][nextj],drag.position);
        /*if (bnext.position != next){
            console.log("c");
            let child = document.getElementById(board[nexti][nextj].id);
            targetcel.removeChild(child);
        }*/
    /*}
    drag.position = next;
    board[nexti][nextj] = board[previ][prevj];
    board[previ][prevj] = 0;
    let img = document.getElementById(drag.id);
    targetcel.appendChild(img);

    let childCount = targetcel.childElementCount;
    if (childCount >1){
        let firstChild = targetcel.firstElementChild;
        firstChild.remove();
    }
    }else{
        drag.showpath();
    }
}

*/



function dragfun(target) {
    let previ, prevj, nexti, nextj, next;
    [previ, prevj] = calcij(drag.position - 1);
    next = Number(target);
    [nexti, nextj] = calcij(next - 1);
  
    if (pathc.includes(next)) {
      let targetcel = document.getElementById(target);
      let bnext = board[nexti][nextj];
  
      if (bnext) {
        // Check if the target cell is occupied by an opponent's piece
        if (pcheck(next, drag.side, bnext)) {
          // Store the location of the piece to be captured
          captureLocation = [nexti, nextj];
  
          // Delay the capturing code until the piece has moved to the target cell
          setTimeout(function() {
            if (captureLocation) {
              // Move the captured piece to the captured pieces area
              let capturedPiece = board[captureLocation[0]][captureLocation[1]];
              let capturedPiecesArea = document.getElementById("captured-pieces");
              let img = document.createElement("img");
              console.log(capturedPiece.id);
              //img.src = "static/img/pieces/" + capturedPiece.id + ".svg";
              img.src = "static/img/pieces/Chess_" + capturedPiece.id.toUpperCase() + ".svg";

              capturedPiecesArea.appendChild(img);
              board[captureLocation[0]][captureLocation[1]] = 0;
              captureLocation = null;
            }
          }, 10);
        }
      }
  
      drag.position = next;
      board[nexti][nextj] = board[previ][prevj];
      board[previ][prevj] = 0;
      let img = document.getElementById(drag.id);
      targetcel.appendChild(img);
  
      let childCount = targetcel.childElementCount;
      if (childCount > 1) {
        let firstChild = targetcel.firstElementChild;
        firstChild.remove();
      }
    } else {
      drag.showpath();
    }
  }
  




function calcij(num){
    i = Math.floor(num/8);
    j = num%8;
    return [i,j];
}

drawBoard();
initiateBoard();
addPieces();