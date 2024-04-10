// let array=[6,2,3,5,9,1];
// let a1=[];
// let a2=[];
// for(i=0;i<array.length;i++){
//     if(array[i]%2==0)
//     {
//         a1.push(array[i]);   
//     }
//     else{
//         a2.push(array[i]);

//     }
// }
// console.log(a1);
// console.log(a2);

//max and min of array-------------------------------------

// let array=[10,2,3,5,9,1];
// let max=array[0];
// for(i=0;i<array.length;i++){
   
// if(array[i]<max){
//     max=array[i];
// }
// }
// console.log(max);

//ascending order-----------------------------------

// let a=[10,2,3,5,9,1];
// a.sort((a,b)=>a-b)
// console.log(a);

//descending order----------------------------------

// let b=[6,2,3,5,9,1];
// for(let j=0;j<b.length;j++){
//     if(b[j]<b[j+1]){
//         let temp=b[j];
//         b[j]=b[j+1];
//         b[j+1]=temp;
//         j=-1;
//     }
// }
// console.log(b)

//reverse of an array-------------------------------

// function reverse(arr){
//     let j=0;
//     let e=arr.length-1;
//     for(a=0;a<e;a++){
//         let temp=arr[j];
//         arr[j]=arr[e];
//         arr[e]=temp;
    
//     j++;
//     e--;
// }
// return arr;
// }
// let a1=[4,2,5,7,1,3];
// console.log(reverse(a1));


//reverse string------------------------------------------

// function strrev(str){
//     let s1='';
//     for(let i=str.length-1;i>=0;i--){
//         s1+=str[i];
//     }
//     return s1;
// }
// let strng="swamy";
// console.log(strrev(strng));

function filterEvenNumbers(numbers) { 
    return numbers.filter(num => num % 2 === 1); 
  }
  let num=[2,7,5,3,4,9,1];
  console.log(filterEvenNumbers(num));


  function toTitleCase(str) { 
    return str.replace(/\b\w/g, l => l.toUpperCase()); 
  } 
  let st="tea";
  console.log(toTitleCase(st));


function fact(n){
    if(n==1 ||n==0){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}
let f=50;
console.log(fact(f));


function prime(num){
    if(num==1)
    return false;
     for(i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
     }
     return true;
}
let p=5;
console.log(prime(p));

function fib(numseries){
    let numterms=[0,1];
    for(i=2;i<numseries;i++){
        numterms[i]=numterms[i-1]+numterms[i-2];
    }
    return numterms;
}
let numseries=10;
console.log(fib(numseries));

function findMaxNumber(arr) { 
    return Math.max(...arr); 
  } 
  let arr=[2,5,3,7,9];
  console.log(findMaxNumber(arr));



  function mergeSortedArrays(arr1, arr2) { 
    return [...arr1,...arr2].sort((a, b) => a-b); 
  } 
  let arr1=[7,8,3,6];
  let arr2=[9,2,4];
  console.log(mergeSortedArrays(arr1,arr2));



  