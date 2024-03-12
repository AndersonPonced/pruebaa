function suma(...num) {
     return num.reduce((total, current) => total + current, 0);
 }
 
 console.log(suma(2, 2, 2, 500,)); // Output: 8
 