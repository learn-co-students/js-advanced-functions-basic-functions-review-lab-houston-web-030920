// Your code here
let saturdayFun = function(str = "roller-skate"){
    return `This Saturday, I want to ${str}!`
}

let mondayWork = function(str = "go to the office"){
    return `This Monday, I will ${str}.`
}

function wrapAdjective(flair = "*"){
    return function(str = "special"){
            return `You are ${flair}${str}${flair}!`
    }
}

let Calculator = {
    add: function(a, b){
        return a + b
    },
    subtract: function(a, b){
        return a - b
    },
    multiply: function(a, b){
        return a * b
    },
    divide: function(a, b){
        return a / b
    }
}

let actionApplyer = function(start, arr){
    let a = start
    arr.forEach(function(ar){
        a = ar(a)
    })
    return a
}