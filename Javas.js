function unique(arr){
    return arr.filter((item,index)=>arr.indexOf(item)==index);
}
let arr=[1,2,1,3,1,4,3,4,9];
console.log(unique(arr));
//--------------------------------------------------

function anagram(s1,s2){
    const str1=s1.split('').sort().join('');
    const str2=s2.split('').sort().join('');
    return str1===str2;
}
var s1="keerthi";
var s2="vinay";
console.log(anagram(s1,s2));
//--------------------------------------------------------

function random(length){
    var char="123456789";
    var result='';
    for(let i=0;i<length;i++){
        var rindex=Math.floor(Math.random()*char.length);
        result+=char.charAt(rindex);
    }
    return result;
}
let a=6;
console.log(random(a));
//------------------------------------------------------------------


function sumArray(array){
    return array.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
}
let array=[1,2,3,4];
console.log(sumArray(array));
//-----------------------------------------------


function sortStrings(str){
    return str.slice().sort();
}
var str=["banana","apple","carrot","dates"];
console.log(sortStrings(str));
//-----------------------------------------------------------------

function sortString(string){
    return string.split('').sort().join('');
}
var string="swamy";
console.log(sortString(string));
//--------------------------------------------------------------------

function index(s,element){
    const i=s.indexOf(element);
    return i!=-1 ? i : -1 ;
}
console.log(index("keerthi",'o'));
//-------------------------------------------------------------------------

var z="vnnu";
var bx=['a','e','i','o','u'];

const vowel=(z)=>{
    let count=0;
    for(let letter of z.toLowerCase()){
        if(bx.includes(letter)){
            count++;
        }
        
    }
    console.log(count);  
    return count;
}
vowel(z);


function xyz(arr){
    var b=['a','e','i','o','u'];
    let count=0;
    for(let letter of arr.toLowerCase()){
        if(b.includes(letter)){
            count++;
        }   
    }
    return count;
}
var array1="keerthi";
console.log(xyz(array1));

