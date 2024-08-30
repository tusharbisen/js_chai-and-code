// Remaining Array Part 2 

const IT_subject = ['TOC','COA','DCN'];

const CSE_subject = ['DAA','CNS','SE'];

// console.log(IT_subject);

// Using Push Method In array TO combine to Array 

 IT_subject.push(CSE_subject);

console.log(IT_subject)

// Using Conacat Method to Combin two Array After combining Create a New Array 

let combineArray = IT_subject.concat(CSE_subject);

console.log(combineArray);

// Using Flat Method to get a instace in recursivly in array 

let num1 = [1,[2,5],[3,[4,5]]] ;

// Depth 2 We can Used Infinity Insted pf that Numeriacal Value;

console.log(num1.flat(2));

// Using Array.from Method to Convert the String or any type of datatype in Array using this Method

let num = Array.from("TUSHar")

console.log(num);

// Using Of "Of" Method In array 
let nums1 = 1;

let nums2 =2 ;

let nums3 = 3;

const addOnce = Array.of(num1 , nums2 , nums3)

console.log(addOnce);




    










