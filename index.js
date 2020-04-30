// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*') {
    return function(param = 'special') {
        return `You are ${flair}${param}${flair}!`
    }
}

const Calculator = {
    add() {
        return 1 + 3
    },

    subtract() {
        return 1 - 3
    },

    multiply() {
        return 1 * 3
    },

    divide() {
        return 10 / 5
    }

}

let actionApplyer = function(int, array) {
    let num = int

    for (let i = 0; i < array.length; i++) {
        num = array[i](num)
    }

    return num
}
