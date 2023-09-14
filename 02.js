function classificaTriangulo (x1, x2, x3) {
    if(x1 == x2 && x2 == x3){
        return 'Equilátero'
    } else if (x1 == x2 || x2 == x3 || x1 == x3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));

