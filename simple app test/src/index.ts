
export function sum(a:number, b:number):number{
    return a+b;
}

//Typical way for the testing as compare to existing testing frameworks and libs.


const test=sum(1,2);

if(test==3){
    console.log('Test passed');
}else{
    console.log('Test failed');
}