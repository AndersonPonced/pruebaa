 

 function suma(a,b,c=0,d=0) {
     if(c != 0 && d !=0){
          return a + b + c + d
     }else if(c != 0){
          return a + b + c
     }else{
          return a + b
     }

 }

 console.log(suma(2,2,2,2))