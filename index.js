// Code your solution here
//Debug:
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
/*Debug */
const pilots = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const findMatching=(anArray,driverName)=>{

    const myArray=[];

anArray.filter(function(driver){

 if(driver.localeCompare(driverName, undefined, { sensitivity: 'base' }) === 0){

myArray.push(driver);

 }

}

)
return myArray;
}


const fuzzyMatch=(anArray,aString)=>{

const len=aString.length;


let myArray = [];

anArray.filter(function(temp){

for(let i=0;i<len;i++){

    if((temp.charAt(i).localeCompare(aString[i], undefined, { sensitivity: 'base' }) === 0) && (temp.charAt(i+1).localeCompare(aString[i+1], undefined, { sensitivity: 'base' }) === 0)){

        myArray.push(temp);

         }

}

   }

   )
   //Debug: console.log(`Array now contains ${myArray}`)

   return myArray;
   }




const matchName=(someArray,someString/*Debug: ,cb*/)=>{

    let tempArray =[];
someArray.filter(function(temp){

if(temp.name === someString){
  tempArray.push(temp);
}



})
//Debug :console.log(`TempArray holds ,`,)cb(tempArray)
return tempArray;


}
/*
Debug:
const printObject=(myObject)=>{

for(let elem of myObject){
console.log(elem)
}
}



Debug : matchName(pilots,`Bobby`,printObject);*/