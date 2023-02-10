class FieldElement {
    constructor(num, prime){
        if(num >= prime || num < 0){
            throw new Error(`${num} is not in field range  0 to ${prime -1}`)
        }
        this.num = num
        this.prime = prime
    }
    repr(){
        return `FieldElement ${this.prime} (${this.num})`
    }
    eq(other){
        if(other === null) return false
        return this.num === other.num && this.prime === other.prime
    }
    ne(other){
        return !this.eq(other)
    }
    add(other){
        if(this.prime !== other.prime) throw new Error("different Fields")
        const num = (this.num + other.num) % this.prime;
        return new FieldElement(num, this.prime);
    }
    sub(other){
        if(this.prime !== other.prime) throw new Error("different Fields")
        const num = (this.num - other.num) % this.prime;
        return new FieldElement(num, this.prime);
    }
    mul(other){
        if(this.prime !== other.prime) throw new Error("different Fields")
        const num = (this.num * other.num) % this.prime;
        return new FieldElement(num, this.prime);
    }
    pow(exponent){
        const num = (this.num ** exponent) % this.prime;
        return new FieldElement(num, this.prime);
    }
}

const p = [7, 11, 17, 31]

for (const prime of p) {
    let arr = []
    for (let i = 1; i < prime; i++) {
        const f1 = new FieldElement(i, prime)
        arr.push(f1.pow(prime - 1))
    }
    console.log(arr);
}