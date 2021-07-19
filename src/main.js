let piece;
let piece1;
let piece2;
let piece3;
let piece4;
let piece5;
let piece6;
function setup() {
    createCanvas(600, 600);
    piece = new Piece(30, 30, 'straight');
    piece1 = new Piece(90, 30, 's');
    piece2 = new Piece(180, 30, 'z');
    piece3 = new Piece(270, 30, 'l');
    piece4 = new Piece(330, 30, 'bl');
    piece5 = new Piece(390, 30, 't');
    piece6 = new Piece(480, 30, 'square');
    piece5.rotateRight();
}
function draw() {
    background(0);
    piece.draw();
    piece1.draw();
    piece2.draw();
    piece3.draw();
    piece4.draw();
    piece5.draw();
    piece6.draw();
}