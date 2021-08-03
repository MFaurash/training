// //
// var Vector = function(x, y) {
//     this.x = x || 0;
//     this.y = y || 0;
// };
// Vector.prototype.add = function(v2) {
// 	return new Vector(this.x + v2.x, this.y + v2.y);
// };
// Vector.prototype.subtract = function(v2) {
// 	return new Vector(this.x - v2.x, this.y - v2.y);
// };
// console.log(new Vector(1, 2).add(new Vector(2, 3)));
// console.log(new Vector(1, 2).subtract(new Vector(2, 3)));

// //
class Vector {
  x;
  y;
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  add(vector) {
    if (!(vector instanceof Vector)) {
      throw new Error('Please provide an instance of the Vector class.');
    }
    
    return new Vector(this.x + vector.x, this.y + vector.y);
  }
  
  substract(vector) {
    if (!(vector instanceof Vector)) {
      throw new Error('Please provide an instance of the Vector class.');
    }
    
    return new Vector(this.x - vector.x, this.y - vector.y);
  }
}
