class Point{
    constructor(x, y, a, b){
        this.a = a,
        this.b = b,
        this.x = x,
        this.y = y
        if(this.x === null && this.y === null) return
        if(this.y**2 !== this.x**3 + this.a*this.x + this.b){
            return console.log(`(${this.x}, ${this.y}) no esta en la curva`);
        }
        return console.log("si esta en la curva");
    }
    __eq__ = (other) => {
        const response = this.x === other.x && this.y === other.y && this.a === other.a && this.b === this.b
        return console.log(response)
    }
    __ne__ = (other) => {
        const response = this.__eq__(other)
        return console.log(!response);
    }
    __add__ = (other) => {
        if(this.a !== other.a || this.b !== other.b){
            return console.log(`${this}, ${other} no estan en la misma curva`);
        }
        //si this.x es null significa que es point of infinity (o sea el numero I para sumar), por lo tanto devuelvo el otro
        if(this.x ===  null) return other;
        //mismo principio que arriba pero diferente caso
        if(other.x === null) return this;
        //misma x pero != y (creo que es el caso de la vertical)
        if(this.x === other.x && this.y !== other.y) return new Point(null, null, this.a, this.b);
        //si son != x puedo obtener otro punto.
        if(this.x !== other.x) {
            const s = (other.y - this.y) / (other.x - this.x);
            const x3 = s**2 - this.x - other.x;
            const y3 = s * (this.x - x3) - this.y
            return new Point(x3, y3, this.a, this.b);
        }
        //suma de dos puntos iguales
        if(this === other){
            const s = (3*this.x**2 + this.a) / (2 * this.y);
            const x3 = s**2 - 2 * this.x;
            const y3 = s * (this.x - x3) - this.y;
            return new Point(x3, y3, this.a, this.b);
        }
        //los dos puntos son iguales pero Y vale cero. Esta es la vertical y tangente (solo hay 1 por curva)
        if(this === other && this.y === 0 * this.x){
            return new Point(null, null, this.a, this.b);
        }
    }
}
// const p1 = new Point(2, 4, 5, 7)//no esta (2, 4)
const p2 = new Point(-1, -1, 5, 7)// si esta (-1, -1)
// const p3 = new Point(18, 77, 5, 7)// si esta (18, 77)
// const p4 = new Point(5, 7, 5, 7) // no esta (5, 7)
// p1.__ne__(p2);
const p5 = new Point(2, 5, 5, 7)
console.log(p2.__add__(p2)); // (18, 77, 5, 7) ej 6
const sumaP2P5 = new Point(3, -7, 5, 7); //ejercicio 4