// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
        return cats.push(name);
    }

function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(name){
    let catsArray =[...cats, name]
    return catsArray
}
function prependCat(name){
    let newArray = [name, ...cats]
    return newArray

}
function removeLastCat(){
    return cats.slice(0,cats.length-1)
}
function removeFirstCat(){
    return cats.slice(1)
}