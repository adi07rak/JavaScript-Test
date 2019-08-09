//Problem 1 :::
var array = [2,2,3,3,3,4,5];
const unique = (value,index,num)=> num.indexOf(value)===index ;
console.log(array.filter(unique));

//-----------------------------------------------------------------------------------------------------------//

//Problem 2 :::
function one(){
    return 1;
}
function two(){
    return 2;
}
function three(){
    return 3;
}

var callfunction = async ()=>{
    var first = await one();
    var second = await two();
    var third = await three();
    return first+"-"+second+"-"+third;
    
}
callfunction().then(value=> console.log(value) );
//-----------------------------------------------------------------------------------------------------------//