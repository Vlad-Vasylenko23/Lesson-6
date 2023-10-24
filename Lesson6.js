function factorial (a){
    if (a <= 1){
        //console.log(1)//

        return 1
    }
    /*console.log(a)*/
    return a * factorial (a-1)
}
const result1 = factorial(6)
console.log ({result1})


function fibonaci (a)
{
    if (a <=1)
    { 
        return a
    }
    
    return fibonaci (a-1) + fibonaci(a-2)
}
const result = fibonaci(20)
console.log ({result})
