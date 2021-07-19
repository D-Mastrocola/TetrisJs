class Piece {
  constructor(x, y, shape) {
    this.pos = createVector(x, y);
    this.shape = shape;
    this.nodes = [];
    this.nodeSize = 20;
    this.createNodes();
  }
  createNodes() {
    if (this.shape === "straight") {
      this.nodes = [["X"], ["X"], ["X"], ["X"]];
    }
    if (this.shape === "s") {
      this.nodes = [
        [" ", "X", "X"],
        ["X", "X", " "],
      ];
    }
    if (this.shape === "z") {
      this.nodes = [
        ["X", "X", " "],
        [" ", "X", "X"],
      ];
    }
    if (this.shape === "l") {
      this.nodes = [
        ["X", " "],
        ["X", " "],
        ["X", "X"],
      ];
    }
    if (this.shape === "bl") {
      this.nodes = [
        [" ", "X"],
        [" ", "X"],
        ["X", "X"],
      ];
    }
    if (this.shape === "t") {
      this.nodes = [
        ["X", "X", "X"],
        [" ", "X", " "],
      ];
    }
    if (this.shape === "square") {
      this.nodes = [
        ["X", "X"],
        ["X", "X"],
      ];
    }
  }
  rotateRight() {  
    let oldNodes = this.nodes
    let newNodes = [];
    let length = 0;
    for(let i = 0; i < oldNodes.length; i++) {
        if(oldNodes[i].length > length) length = oldNodes[i].length;
    }               
    for(let i = 0; i < length; i++) newNodes.push([])
    
    
    console.log(oldNodes +'\n' + newNodes)
  }
  draw() {
    fill(255);
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = 0; j < this.nodes[i].length; j++) {
        if (this.nodes[i][j] === "X")
          rect(
            this.pos.x + j * this.nodeSize,
            this.pos.y + i * this.nodeSize,
            this.nodeSize,
            this.nodeSize
          );
      }
    }
  }
}
