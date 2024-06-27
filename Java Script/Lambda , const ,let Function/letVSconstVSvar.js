function letcheckReAssignment(){
    let x = 10;
    console.log(x);
    x = "Let Assignmnet";
    console.log(x);
}
function constReAssignment(){
    const y = 11;
    console.log(y);
    y = "ConstAssignment"; // not possible coz of const 
    console.log(y)
}
function ConstAssignmentObject(){
    const object = {r: 10, y : 20};
    console.log(object);
    object = {check :'Checking Assginmen of object '}; // assignment not possible coz of const obj but it is possible with other type var or let type of object object values stored in Heap Memories so it will reassignment with new one
    console.log(object)
}
updatingObjValue = () => {
const updateObj = { x : 112, y: 100}
console.log(updateObj)
updateObj.x = 102; // it is possible with other type var or let type of object object values stored in Heap Memories so it will reassignment with new one
updateObj.y ='Changed Value of Object is Done here ';
return updateObj;
}
referenceConstObject = () => {
 const objCheck = { x: 'will refere to another obj these values', y : 1 };
 console.log(objCheck);
 const referringObj = objCheck;
 referringObj.x = ' Value update done by Referred object'; // updated the values using new reffered obj 
 referringObj.y = 101;
 console.log(referringObj)

}
/**
 * 
 */
function varReassingment(){
    var z = 14 ;
    console.log(z)
    z = "VarAssignment"
    console.log(z)
}
console.log(updatingObjValue());
referenceConstObject();

