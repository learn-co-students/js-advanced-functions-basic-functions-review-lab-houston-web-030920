// Your code here
function saturdayFun(string="roller-skate"){
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string="go to the office"){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(string="*"){

    return function(param="special"){
        return `You are ${string}${param}${string}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a + b
    },

    subtract: function(a,b){
        return a - b
    },

    multiply: function(a,b){
        return a * b
    },

    divide: function(a,b){
        return a / b 
    }
}

function actionApplyer(int, array){
    let newAnswer = int
    if(array.length == 0){
        return int
    }else{
      for(let i = 0; i < array.length; i++){
           newAnswer = array[i](newAnswer)
      }
    }
    return newAnswer

}