// const b = document.querySelector(".b")
// const inp = document.querySelector("input")
// localStorage.setItem("txt","[]")

const { set } = require("mongoose")

// b.addEventListener("click",(e)=> {
//     let local = JSON.parse(localStorage.getItem("txt"))
//     local.push({value:1})
//     localStorage.setItem("txt",JSON.stringify(local))
//     local = JSON.parse(localStorage.getItem("txt"))
//     console.log(local);
    
// })

let a = [1,1,2,2,3,3,9,1]
function filterAndSortEvenNumbers(obj) {
    obj.sort()
    const ary = obj.filter( num => {return num % 2 == 0})
    return ary
}

function removeDuplicates(obj){
    let arry = []
    for(let i = 0 ; i < obj.length ; i++){
        if(! arry.includes(obj[i])){
            arry.push(obj[i])
        }
    }
    return arry
}



a = "roee yosef litmanovich."

function capitalizeFirstLetter(string) {
    let arry = string.split(" ")
    for(let i = 0 ; i < arry.length ; i++){
        if( arry[i][arry[i].length - 1] !== "."){
            arry[i] = arry[i][0].toUpperCase() + arry[i].slice(1,arry[i].length -1)
        }
    }
    return arry.join(" ")
}

function loadTasks(){
    let localSt = localStorage.getItem("tasks")
    if (localSt === null){
        localStorage.setItem("tasks","[]")
        localSt = localStorage.getItem("tasks")
    } 
    return localSt
}







